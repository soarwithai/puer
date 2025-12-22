import { TeaDetailData, AISettings } from '../types';
import { TEA_DATABASE } from '../data/teaDatabase';

// --- Local Data Service ---

/**
 * 获取茶品详情 (离线版)
 * 不需要 API Key，直接从本地数据库读取
 */
export const generateTeaDetails = async (teaName: string, settings?: AISettings): Promise<TeaDetailData> => {
  // 模拟异步加载，让 UI 体验更流畅 (Optional)
  // await new Promise(resolve => setTimeout(resolve, 300));

  // 1. 尝试通过 ID 查找 (如果传入的是 ID)
  if (TEA_DATABASE[teaName]) {
    return TEA_DATABASE[teaName];
  }

  // 2. 尝试通过 Name 查找
  const foundId = Object.keys(TEA_DATABASE).find(key => TEA_DATABASE[key].name === teaName);
  if (foundId) {
    return TEA_DATABASE[foundId];
  }

  // 3. Fallback: 如果找不到完全匹配的，返回一个通用模板或错误
  // 在当前应用逻辑中，sidebar 传入的一般是 name，但为了稳健，我们应该确保 database 覆盖全
  
  console.warn(`Tea not found in database: ${teaName}`);
  
  return {
    name: teaName,
    subTitle: "资料收录中",
    year: "未知",
    factory: "未知茶厂",
    spec: "357克/饼",
    description: "抱歉，该茶品的详细资料暂未收录到本地典籍中。请联系管理员更新数据库。",
    characteristics: ["暂无数据"],
    prices: []
  };
};