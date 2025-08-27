import { HeaderTitle } from '~/shared/components/header-title/header-title';
import type { Route } from './+types/top';
import sort from '~/assets/images/sort.svg';
import { Button } from '~/shared/components/button/button';
import { ArticleItem } from '~/shared/components/article-item/article-item';
import { SearchTag } from '~/shared/components/search-tag/search-tag';
import { useNavigate } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: '法テラス｜弁護士' },
  ];
}

export default function Top() {
  const navigate = useNavigate();

  return (
    <main>
      {/** 連絡一覧 */}
      <section className='md:h-[50.73%]'>
        <header className='flex justify-between ml-2 md:ml-0'>
          <HeaderTitle title='連絡一覧' />
          <div className='flex flex-row gap-6'>
            <Button variant='solid-fill' size='sm' className='hidden md:block'>
              ＋新規連絡
            </Button>
            <img src={sort} alt='ソート' className='block mr-1'/>
          </div>
        </header>
        <div className='mt-4 max-h-166.5 overflow-y-auto md:max-h-108.75 md:h-[90%]'>
          <ArticleItem title='12345678 宇津井 祐一' content='多重債務に関する詳細情報について、本人情報に訂正がありましたので再送します' 
                        updDatetime='25/11/12 14:32' category='民事法律扶助' isNew={true} isFlagOn={false} onClick={() => navigate('contacts/1')} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={true} isFlagOn={false} onClick={() => navigate('contacts/2')}
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
          <ArticleItem title='12345678 宇津井 祐一' content='多重債務に関する詳細情報について、本人情報に訂正がありましたので再送します' 
                        updDatetime='25/11/12 14:32' category='民事法律扶助' isNew={false} isFlagOn={true} onClick={() => navigate('contacts/3')} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
          <ArticleItem title='12345678 宇津井 祐一' content='多重債務に関する詳細情報について、本人情報に訂正がありましたので再送します' 
                        updDatetime='25/11/12 14:32' category='民事法律扶助' isNew={false} isFlagOn={false} onClick={() => navigate('contacts/4')} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} onClick={() => navigate('contacts/5')} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} onClick={() => navigate('contacts/6')} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} onClick={() => navigate('contacts/7')} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} onClick={() => navigate('contacts/8')} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} onClick={() => navigate('contacts/9')} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} onClick={() => navigate('contacts/10')} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
        </div>
      </section>
      {/** 事件検索 */}
      <section className='hidden md:block mt-10 h-[32.75%]'>
        <header className='flex justify-between'>
          <HeaderTitle title='事件検索' />
          <div className='flex flex-row gap-4'>
            <SearchTag title='民事法律扶助' isSelected={true} />
            <SearchTag title='国選弁護等関連' isSelected={false} />
            <SearchTag title='犯罪被害者支援' isSelected={false} />
            <SearchTag title='受託業務' isSelected={false} />
            <img src={sort} alt='ソート' className='block mx-1'/>
          </div>
        </header>
        <div className='mt-4 max-h-65.25 overflow-y-auto h-[82.86%]'>
          <ArticleItem title='XYZ-AAA 大久保 千秋' content='進行中　DV被害と離婚相談' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
          <ArticleItem title='XYZ-VCX  宇津井 祐一' content='完了　３件の債務整理' 
                        updDatetime='25/11/12 14:32' category='民事法律扶助' isNew={false} isFlagOn={false} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
          <ArticleItem title='XYZ-AAA 大久保 千秋' content='進行中　DV被害と離婚相談' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} 
                        onFlagClick={(isOn) => console.log('isOn : ' + isOn) } />
        </div>
      </section>
    </main>
  );
}
