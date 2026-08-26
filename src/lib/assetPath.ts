const EXTERNAL_ASSET_PATTERN = /^(?:https?:|data:|blob:|\/\/)/i;

export function withBasePath(path: string): string {
  if (EXTERNAL_ASSET_PATTERN.test(path)) {
    return path;
  }

  const assetPath = `/${path.replace(/^\/+/, '')}`;
  const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? '';
  const basePath = configuredBasePath.replace(/^\/+|\/+$/g, '');

  return basePath ? `/${basePath}${assetPath}` : assetPath;
}
