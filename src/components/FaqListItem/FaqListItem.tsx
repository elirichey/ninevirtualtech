"use client";
import Image from "next/image";
import { useState } from "react";
import { parse } from "node-html-parser";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import RichText from "../Renders/RichText";

interface Props {
  question: string;
  answer: any;
  index: number;
}

export default function FaqListItem(props: Props) {
  const [show, setShow] = useState<boolean>(false);

  const { question, answer, index } = props;
  const faqId = `faq-${index}`;
  const dropdownStyle = show
    ? "faq-dropdown-indicator active"
    : "faq-dropdown-indicator";

  //const docString = documentToHtmlString(answer);
  //const doc = parse(docString);

  return (
    <div id={faqId} className="faq-list-item">
      <div className="row clickable" onClick={() => setShow(!show)}>
        <p className={show ? "question active" : "question"}>{question}</p>

        <div className={dropdownStyle}>
          <Image src="/svg/arrow.svg" alt="arrow-icon" width={10} height={10} />
        </div>
      </div>

      {show ? <RichText data={answer} /> : <></>}
    </div>
  );
}
