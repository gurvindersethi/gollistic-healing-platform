#!/usr/bin/env bash
# One-time setup: GitHub Project board + Pipeline field + feature issues.
# Requires: gh auth refresh -h github.com -s project

set -euo pipefail

OWNER="gurvindersethi"
REPO="${OWNER}/gollistic-healing-platform"
PROJECT_TITLE="Gollistic Healing Platform"
PIPELINE_OPTIONS="📋 Backlog,📝 Planning,🎨 Designing,💻 Development,🧪 Testing,🚀 Ready to Deploy,✅ Done"
ISSUE_NUMBERS=(1 2 3 4)

if ! gh auth status 2>&1 | grep -q 'read:project\|project'; then
  echo "Missing 'project' scope. Run: gh auth refresh -h github.com -s project"
  exit 1
fi

echo "Creating project: ${PROJECT_TITLE}"
PROJECT_JSON=$(gh project create --owner "${OWNER}" --title "${PROJECT_TITLE}" --format json)
PROJECT_NUMBER=$(echo "${PROJECT_JSON}" | jq -r '.number')
PROJECT_URL=$(echo "${PROJECT_JSON}" | jq -r '.url')

echo "Linking repository: ${REPO}"
gh project link "${PROJECT_NUMBER}" --owner "${OWNER}" --repo "${REPO}"

echo "Creating Pipeline field"
gh project field-create "${PROJECT_NUMBER}" --owner "${OWNER}" \
  --name "Pipeline" \
  --data-type SINGLE_SELECT \
  --single-select-options "${PIPELINE_OPTIONS}"

echo "Adding feature issues to project"
for num in "${ISSUE_NUMBERS[@]}"; do
  gh project item-add "${PROJECT_NUMBER}" --owner "${OWNER}" \
    --url "https://github.com/${REPO}/issues/${num}"
  echo "  Added issue #${num}"
done

echo ""
echo "Done. Open the project and set Board view → Group by: Pipeline"
echo "${PROJECT_URL}"
