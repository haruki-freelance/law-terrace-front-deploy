import { Accordion, AccordionContent, AccordionSummary } from "~/shared/components/accordion/accordion";
import type { Route } from "./+types/detail";
import { Label } from "~/shared/components/label/label";
import { RequirementBadge } from "~/shared/components/requirement-badge/requirement-badge";
import { CheckedMark } from "~/shared/components/checked-mark/checked-mark";
import { Input } from "~/shared/components/input/input";
import { CalendarInput } from "~/shared/components/calendar-input/calendar-input";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "法テラス｜弁護士｜連絡詳細" },
  ];
}

/** 連絡詳細画面 */
export default function Detail({ params }: Route.LoaderArgs) {
  const [detentionDate, setDetentionDate] = useState<string>();
  const [electionDate, setElectionDate] = useState<string>();
  const [detentionDateShown, setDetentionDateShown] = useState<boolean>(false);
  const [electionDateShown, setElectionDateShown] = useState<boolean>(false);

  /** 全てのカレンダーポップアップ画面を閉じる */
  const closeAllCalendars = () => {
    setDetentionDateShown(false);
    setElectionDateShown(false);
  };

  return (
    <main className='flex flex-col w-full md:w-[73%] py-8 md:pl-8 md:pr-4 h-full'>
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
                <Input name='name' blockSize='md' className='w-135 mt-3' required />
                {/* 事件番号 */}
                <Label size='md' htmlFor='incidentNo' className='mt-6'>事件番号
                  <RequirementBadge>※</RequirementBadge>
                  <CheckedMark isChecked={true} />
                </Label>
                <Input type='number' name='incidentNo' blockSize='md'
                  className='w-60 mt-3 mx-0 mb-0
                  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                  [&::-webkit-inner-spin-button]:appearance-none text-right' required />
                <span className='ml-2'>年</span>
                <Input type='number' name='incidentNo' blockSize='md'
                  className='w-60 mt-3 mr-0 mb-0 ml-4
                  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                  [&::-webkit-inner-spin-button]:appearance-none text-right' required />
                <span className='ml-2'>号</span>
                {/* 勾留日 */}
                <Label size='md' htmlFor='detentionDate' className='mt-6'>勾留日
                  <RequirementBadge>※</RequirementBadge>
                  <CheckedMark isChecked={false} />
                </Label>
                <div className='relative'>
                  <Input name='detentionDate' blockSize='md' className='w-135 mt-3 text-right cursor-pointer' value={detentionDate}
                    onClick={() => setDetentionDateShown(true)} required readOnly />
                  <CalendarInput className='absolute top-18 right-0 z-1' isShown={detentionDateShown}
                    onChange={(val) => { setDetentionDate(val.toString()); setDetentionDateShown(false); }} />
                </div>
                {/* 選任日 */}
                <Label size='md' htmlFor='electionDate' className='mt-6'>選任日
                  <RequirementBadge>※</RequirementBadge>
                  <CheckedMark isChecked={false} />
                </Label>
                <div className='relative'>
                  <Input name='electionDate' blockSize='md' className='w-135 mt-3 text-right cursor-pointer' value={electionDate}
                    onClick={() => setElectionDateShown(true)} required readOnly />
                  <CalendarInput className='absolute top-18 right-0 z-1' isShown={electionDateShown}
                    onChange={(val) => { setElectionDate(val.toString()); setElectionDateShown(false); }} />
                </div>
                {/* 罪名 */}
                <Label size='md' htmlFor='crimeName' className='mt-6'>罪名
                  <RequirementBadge>※</RequirementBadge>
                  <CheckedMark isChecked={false} />
                </Label>
                <Input name='crimeName' blockSize='md' className='w-135 mt-3' required />
              </form>
            </AccordionContent>
          </Accordion>
      </section>
      {/* オーバーレイ */}
      <div className={`fixed top-0 left-0 w-full h-full ${detentionDateShown || electionDateShown ? 'block' : 'hidden'}`}
        onClick={closeAllCalendars} />
    </main>
  );
}
