/* ============================================================
 * 王权骰铸 · 云服务配置
 * ------------------------------------------------------------
 * 本文件集中存放游戏联网所需的云端配置，与游戏逻辑分离，
 * 便于后续更换服务器、切换账号或维护。
 *
 * 安全说明：
 *  - endpoint       公开的服务器地址，可安全公开。
 *  - publishableKey 前端公开密钥，本身不携带权限；
 *                   云端通过"网页来源(Origin)精确匹配"做真正的安全校验，
 *                   因此放入公开仓库不会泄露任何权限。
 *  - 请勿在此文件或任何提交到仓库的文件中放入服务端私有密钥。
 * ============================================================ */

window.PUBLIC_CONFIG = {
  endpoint: "https://dice-throne-27149.app.workbuddy.host",
  oauthRelayBaseUrl: "https://www.workbuddy.cn/v2/as/genie-baas/oauth",
  publishableKey: "wbpk_8lL3SGgTtqNDS5MzW33KcS_kHw7TGEM0qHHbDvFL0poXlnjLnDtL9B8",
};
