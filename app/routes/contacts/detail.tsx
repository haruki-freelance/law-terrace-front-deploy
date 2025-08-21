import { Accordion, AccordionContent, AccordionSummary } from "~/shared/components/accordion/accordion";
import type { Route } from "./+types/detail";
import { Label } from "~/shared/components/label/label";
import { RequirementBadge } from "~/shared/components/requirement-badge/requirement-badge";
import { CheckedMark } from "~/shared/components/checked-mark/checked-mark";
import { Input } from "~/shared/components/input/input";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "法テラス｜弁護士｜連絡詳細" },
  ];
}

export default function Detail({ params }: Route.LoaderArgs) {
  return (
    <main className='flex flex-col w-full md:w-[73%] py-8 md:pl-8 md:pr-4 h-full'>
      {/* <h1>Detail id : {params.id}</h1> */}
      <header className='text-center'>
        <h1 className='text-[32px] leading-[150%]'>被疑者国選弁護報告</h1>
      </header>
      <section>
        <Accordion className='text-std-16N-170'>
            <AccordionSummary className='desktop:text-std-18N-160' id='accordion-example-summary-1'>
              <h3>被疑者情報</h3>
            </AccordionSummary>
            <AccordionContent className='flex items-center justify-center'>
              <form>
                {/* 被疑者名 */}
                <Label size='md' htmlFor='name'>被疑者名
                  <RequirementBadge>※</RequirementBadge>
                  <CheckedMark isChecked={true} />
                </Label>
                <Input name='name' blockSize='md' autoComplete='true' className='w-135 mt-3' />
                {/* 事件番号 */}
                <Label size='md' htmlFor='incidentNo' className='mt-6'>事件番号
                  <RequirementBadge>※</RequirementBadge>
                  <CheckedMark isChecked={true} />
                </Label>
                <Input name='incidentNo' blockSize='md' autoComplete='true' className='w-135 mt-3' />
                {/* 勾留日 TODO : カレンダー入力に修正 */}
                <Label size='md' htmlFor='detentionDate' className='mt-6'>勾留日
                  <RequirementBadge>※</RequirementBadge>
                  <CheckedMark isChecked={false} />
                </Label>
                <Input name='detentionDate' blockSize='md' autoComplete='true' className='w-135 mt-3' />
                {/* 選任日 TODO : カレンダー入力に修正 */}
                <Label size='md' htmlFor='electionDate' className='mt-6'>選任日
                  <RequirementBadge>※</RequirementBadge>
                  <CheckedMark isChecked={false} />
                </Label>
                <Input name='electionDate' blockSize='md' autoComplete='true' className='w-135 mt-3' />
                {/* 罪名 */}
                <Label size='md' htmlFor='crimeName' className='mt-6'>罪名
                  <RequirementBadge>※</RequirementBadge>
                  <CheckedMark isChecked={false} />
                </Label>
                <Input name='crimeName' blockSize='md' autoComplete='true' className='w-135 mt-3' />
              </form>
            </AccordionContent>
          </Accordion>
      </section>
    </main>
  );
}
