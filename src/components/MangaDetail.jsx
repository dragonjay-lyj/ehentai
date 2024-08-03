import React, { useState, useEffect } from 'react';

export default function MangaDetail() {
  const [manga, setManga] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('../../src/content/data.json')
      .then(response => response.json())
      .then(data => {
        setManga(data[0]); // 假设你想展示第一个漫画的详情
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="skeleton"></div>;
  }

  const blurNSFW = (nsfw) => nsfw && (nsfw.pron > 0.5 || nsfw.sexy > 0.5 || nsfw.hentai > 0.5);

  return (
    <div className="container mx-auto p-4">
      {/* 小卡片 */}
      <div className="card card-side card-bordered mb-6">
        <figure>
          <img src={manga.image} alt="漫画封面" className="w-32 h-48 object-cover" />
        </figure>
        <div className="card-body">
          <div className="card card-bordered mb-2">
            <div className="card-body">
              <p>语言: {manga.language}</p>
              <p>大小: {manga.size}</p>
              <p>页数: {manga.pageCount}</p>
            </div>
          </div>
          <div className="btn btn-disabled btn-sm">{manga.author.name}</div>
        </div>
      </div>

      {/* 中等卡片 */}
      <div className="card card-bordered mb-6">
        <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="介绍" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div dangerouslySetInnerHTML={{ __html: manga.content }}></div>
          </div>
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="标签" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            {manga.tags && manga.tags.map((tag, index) => (
              <span key={index} className="btn btn-disabled btn-sm mr-2">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 大卡片 */}
      <div className="card card-bordered">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {manga.images && manga.images.map((image, index) => (
            <div key={index} className="relative">
              <div className={`tooltip ${blurNSFW(image.nsfw) ? 'tooltip-error' : ''}`} data-tip="NSFW 图片">
                <img 
                  src={image.url} 
                  alt={`漫画图片 ${index + 1}`}
                  style={{ filter: blurNSFW(image.nsfw) ? 'blur(30px)' : 'none' }} 
                  className="w-full object-cover"
                />
                {blurNSFW(image.nsfw) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="alert alert-warning">此图片包含 NSFW 内容</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
