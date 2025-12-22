import React from 'react';
import { TeaDetailData } from '../types';
import { Leaf, Award, Scale, Factory, History, Scroll, Mountain, Sparkles } from 'lucide-react';

interface TeaDetailProps {
  data: TeaDetailData | null;
  loading: boolean;
  selectedName: string;
}

export const TeaDetail: React.FC<TeaDetailProps> = ({ data, loading, selectedName }) => {
  // Loading 状态
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-12 text-tea-600">
        <div className="w-12 h-12 border-4 border-tea-300 border-t-tea-600 rounded-full animate-spin mb-4"></div>
        <p className="text-lg font-serif tracking-widest">翻阅典籍中...</p>
      </div>
    );
  }

  // Cover Page (Empty State)
  if (!data) {
    return (
      <div className="max-w-5xl mx-auto bg-paper min-h-screen relative overflow-hidden font-serif text-tea-900">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/3 -translate-y-1/4">
             <div className="w-[800px] h-[800px] rounded-full border-[40px] border-tea-800"></div>
        </div>
        
        <div className="relative z-10 p-8 md:p-16 lg:p-24 space-y-12">
            
            {/* Hero Section */}
            <div className="border-b-2 border-tea-200 pb-12">
                <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-tea-900 mb-6">普洱茶典籍</h1>
                <p className="text-xl md:text-2xl text-tea-600 italic leading-relaxed">
                    "越陈越香，时光的艺术"
                </p>
                <p className="mt-8 text-lg leading-loose text-tea-800 text-justify max-w-3xl">
                    普洱茶，源于云南，盛于历史。它不仅仅是一片树叶，更是一段可以饮用的岁月。
                    从清代的瑞贡天朝，到民国的私人茶号，再到新中国的国营大厂与当代的百花齐放。
                    每一饼茶，都封存着当年的阳光、雨露与制茶人的匠心。
                    本典籍收录了百余款传世珍品，邀您一同翻阅这厚重的茶香历史。
                </p>
            </div>

            {/* Eras Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-tea-800">
                        <History size={28} />
                        <h2 className="text-2xl font-bold">号级茶 (Antique)</h2>
                    </div>
                    <p className="text-sm text-tea-500 font-sans mb-2">1950年以前 · 私人茶庄时代</p>
                    <p className="text-tea-700 leading-relaxed">
                        以宋聘号、同庆号、福元昌为代表。存世极少，价值连城。
                        选料考究，工艺精湛，历经百年陈化，展现出极致的药香与化境，是普洱茶界的皇冠明珠。
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-tea-800">
                        <Scroll size={28} />
                        <h2 className="text-2xl font-bold">印级茶 (Print)</h2>
                    </div>
                    <p className="text-sm text-tea-500 font-sans mb-2">1950 - 1960年代 · 国营厂奠基</p>
                    <p className="text-tea-700 leading-relaxed">
                        新中国成立后，勐海茶厂等国营大厂开启了现代普洱茶生产。
                        红印、蓝印、黄印等以包装印刷颜色命名的茶品，承上启下，风格宏大，奠定了现代普洱的味觉基调。
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-tea-800">
                        <Factory size={28} />
                        <h2 className="text-2xl font-bold">七子饼 (Seven Sons)</h2>
                    </div>
                    <p className="text-sm text-tea-500 font-sans mb-2">1970 - 1990年代 · 侨销圆茶</p>
                    <p className="text-tea-700 leading-relaxed">
                        文化大革命时期至90年代末。7542、8582等经典配方诞生。
                        以“云南七子饼茶”为名，出口港澳台及东南亚，成为了最具文化辨识度的普洱茶符号。
                    </p>
                </div>

                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-tea-800">
                        <Mountain size={28} />
                        <h2 className="text-2xl font-bold">班章/孔雀 (Modern)</h2>
                    </div>
                    <p className="text-sm text-tea-500 font-sans mb-2">2000 - 2006年 · 古树复兴</p>
                    <p className="text-tea-700 leading-relaxed">
                        千禧年后，随着班章大白菜、孔雀系列的横空出世，普洱茶进入了古树纯料与山头主义的新时代。
                        茶气霸道，风格鲜明，创造了无数收藏神话。
                    </p>
                </div>

            </div>

             {/* Footer hint */}
             <div className="pt-12 mt-12 border-t border-tea-100 flex items-center justify-center gap-2 text-tea-500 animate-pulse">
                <Sparkles size={16} />
                <span className="font-sans text-sm tracking-widest">请点击左上角或侧边栏查询具体茶品</span>
             </div>
        </div>
      </div>
    );
  }

  // Tea Detail Page
  return (
    <div className="max-w-4xl mx-auto bg-paper shadow-sm min-h-screen relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <div className="w-[500px] h-[500px] rounded-full border-[20px] border-tea-800"></div>
            <div className="absolute inset-0 flex items-center justify-center text-[200px] font-serif text-tea-900 font-bold">茶</div>
        </div>

      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        
        {/* Header Section */}
        <header className="mb-12 border-b-2 border-tea-200 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-tea-900 mb-2 tracking-tight">
                {data.name}
              </h1>
              {data.subTitle && (
                <h2 className="text-xl md:text-2xl text-tea-600 font-serif italic">
                  {data.subTitle}
                </h2>
              )}
            </div>
            <div className="text-5xl opacity-10 text-tea-800 font-bold absolute right-12 top-12 md:static select-none">
              {data.year}
            </div>
          </div>
        </header>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-tea-50 p-6 rounded-sm border border-tea-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-tea-200 rounded-full text-tea-800"><Scale size={20} /></div>
            <div>
              <p className="text-xs text-tea-500 uppercase tracking-wider">规格</p>
              <p className="font-medium text-tea-900">{data.spec}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-tea-200 rounded-full text-tea-800"><Factory size={20} /></div>
            <div>
              <p className="text-xs text-tea-500 uppercase tracking-wider">茶厂</p>
              <p className="font-medium text-tea-900">{data.factory}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-tea-200 rounded-full text-tea-800"><Award size={20} /></div>
            <div>
              <p className="text-xs text-tea-500 uppercase tracking-wider">年份</p>
              <p className="font-medium text-tea-900">{data.year}</p>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tea Image */}
            {data.image && (
              <section className="mb-8">
                <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-tea-200">
                  <img 
                    src={data.image.startsWith('/') ? data.image : `/${data.image}`}
                    alt={data.name}
                    className="w-full h-auto object-cover"
                    onLoad={(e) => {
                      console.log('Image loaded successfully:', e.currentTarget.src);
                    }}
                    onError={(e) => {
                      console.error('Image failed to load:', e.currentTarget.src);
                      // 显示错误提示框
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="p-8 text-center text-tea-500 text-sm">
                          <p class="mb-2">图片加载失败</p>
                          <p class="text-xs text-tea-400">${data.image}</p>
                        </div>`;
                      }
                    }}
                  />
                </div>
              </section>
            )}
            
            <section>
              <h3 className="text-xl font-serif font-bold text-tea-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-tea-600 block"></span>
                茶品介绍
              </h3>
              <p className="text-tea-800 leading-loose text-justify text-lg font-light whitespace-pre-line">
                {data.description}
              </p>
            </section>

             <section>
              <h3 className="text-xl font-serif font-bold text-tea-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-tea-600 block"></span>
                品鉴特征
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.characteristics.map((char, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-tea-700">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-tea-400 rounded-full flex-shrink-0"></span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Price History & Notes */}
          <div className="lg:col-span-1">
             <div className="bg-white border border-tea-200 p-6 shadow-sm sticky top-8">
                <h3 className="text-lg font-serif font-bold text-tea-800 mb-6 border-b border-tea-100 pb-2">
                  参考行情 (CNY)
                </h3>
                <div className="space-y-6 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-tea-200"></div>
                  
                  {data.prices.map((price, idx) => (
                    <div key={idx} className="relative pl-6">
                      <div className="absolute left-0 top-1.5 w-4 h-4 bg-tea-100 border-2 border-tea-400 rounded-full"></div>
                      <div className="flex justify-between items-baseline mb-1">
                         <span className="text-sm font-bold text-tea-500">{price.year}</span>
                      </div>
                      <div className="text-xl font-serif font-bold text-tea-900">{price.price}</div>
                      {price.note && <div className="text-xs text-tea-400 mt-1">{price.note}</div>}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-tea-100 text-xs text-tea-400 text-center">
                    * 价格仅供参考，具体依仓储品相而定
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};