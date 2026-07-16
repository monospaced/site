export const ARCHIVE_BASE_PATH = "/v1";
export const ARCHIVE_HOME_PATH = `${ARCHIVE_BASE_PATH}/`;
export const ARCHIVE_LEGAL_PATH = `${ARCHIVE_BASE_PATH}/legal/`;
export const DESIGN_SYSTEM_PATH = `${ARCHIVE_BASE_PATH}/design-system/?path=/docs/introduction--page`;

export const archiveAssetPath = assetPath => `${ARCHIVE_BASE_PATH}${assetPath}`;
