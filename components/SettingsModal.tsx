import React, { useState, useEffect } from 'react';
import { AISettings, AIProvider } from '../types';
import { X, Save, Settings as SettingsIcon } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSettings: AISettings;
  onSave: (settings: AISettings) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, currentSettings, onSave }) => {
  const [provider, setProvider] = useState<AIProvider>('gemini');
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    if (isOpen) {
      setProvider(currentSettings.provider);
      setApiKey(currentSettings.apiKey);
    }
  }, [isOpen, currentSettings]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ provider, apiKey });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
      <div className="bg-paper w-full max-w-md rounded shadow-2xl border border-tea-200 overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-tea-800 p-4 flex justify-between items-center text-tea-50">
          <div className="flex items-center gap-2">
            <SettingsIcon size={20} />
            <h2 className="font-serif font-bold tracking-wide">AI 设置</h2>
          </div>
          <button onClick={onClose} className="hover:bg-tea-700 p-1 rounded transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          
          {/* Provider Selection */}
          <div>
            <label className="block text-sm font-bold text-tea-700 mb-2 uppercase tracking-wider">
              选择 AI 模型 (Provider)
            </label>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => setProvider('gemini')}
                className={`p-3 rounded border text-left transition-all ${
                  provider === 'gemini' 
                    ? 'border-tea-600 bg-tea-100 text-tea-900 ring-1 ring-tea-600' 
                    : 'border-tea-200 text-tea-500 hover:bg-tea-50'
                }`}
              >
                <div className="font-bold">Google Gemini</div>
                <div className="text-xs opacity-75">需科学上网 / Best Quality</div>
              </button>
              
              <button
                onClick={() => setProvider('deepseek')}
                className={`p-3 rounded border text-left transition-all ${
                  provider === 'deepseek' 
                    ? 'border-tea-600 bg-tea-100 text-tea-900 ring-1 ring-tea-600' 
                    : 'border-tea-200 text-tea-500 hover:bg-tea-50'
                }`}
              >
                <div className="font-bold">DeepSeek (深度求索)</div>
                <div className="text-xs opacity-75">国内可用 / High Performance</div>
              </button>

              <button
                onClick={() => setProvider('moonshot')}
                className={`p-3 rounded border text-left transition-all ${
                  provider === 'moonshot' 
                    ? 'border-tea-600 bg-tea-100 text-tea-900 ring-1 ring-tea-600' 
                    : 'border-tea-200 text-tea-500 hover:bg-tea-50'
                }`}
              >
                <div className="font-bold">Moonshot (Kimi)</div>
                <div className="text-xs opacity-75">国内可用 / Long Context</div>
              </button>
            </div>
          </div>

          {/* API Key Input */}
          <div>
            <label className="block text-sm font-bold text-tea-700 mb-2 uppercase tracking-wider">
              API Key (密钥)
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={provider === 'gemini' ? "使用默认环境变量 (可留空)" : "请输入您的 API Key"}
              className="w-full bg-white border border-tea-300 rounded p-3 text-tea-900 focus:outline-none focus:border-tea-600 focus:ring-1 focus:ring-tea-600 font-mono text-sm"
            />
            <p className="text-xs text-tea-400 mt-2">
              Key 仅保存在您的本地浏览器中，不会上传到服务器。
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-tea-50 p-4 border-t border-tea-200 flex justify-end">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-tea-800 hover:bg-tea-700 text-white px-6 py-2 rounded shadow-sm transition-all font-medium"
          >
            <Save size={18} />
            保存设置
          </button>
        </div>
      </div>
    </div>
  );
};
