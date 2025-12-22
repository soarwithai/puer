export enum TeaCategory {
  ANTIQUE = '号级茶 (1950前)',
  PRINT = '印级茶 (1950-1960s)',
  SEVEN_SONS = '七子饼 (1970-1990s)',
  BANZHANG_PEACOCK = '班章/孔雀 (2000-2006)',
  CONTEMPORARY = '现代名品 (2007-至今)'
}

export interface TeaListItem {
  id: string;
  name: string;
  category: TeaCategory;
  page: number; // Reference page from the book images
}

export interface TeaPricePoint {
  year: string;
  price: string;
  note?: string;
}

export interface TeaDetailData {
  name: string;
  subTitle?: string; // e.g., "无可比拟润心怀"
  year: string;
  factory: string; // e.g., 勐海茶厂
  spec: string; // e.g., 357克/饼
  image?: string; // Path to tea image
  description: string; // The main text body
  characteristics: string[]; // Bullet points of flavor/leaf
  prices: TeaPricePoint[];
}

export type AIProvider = 'gemini' | 'deepseek' | 'moonshot';

export interface AISettings {
  provider: AIProvider;
  apiKey: string;
}
