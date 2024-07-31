import React from "react";

const questions = [
  {
    id: 1,
    question: "What are Semantic Tags in Html",
    answer: [
      {
        id: 1,
        ans: "Semantic Tags in Html are Tags that convery meaning of the content enclosed within them.",
      },
      {
        id: 2,
        ans: "They provide a clear structued way of marking  up web content.",
      },
      {
        id: 3,
        ans: "This makes easy for Browser, search engine and developer to understand the structure and content of webpage.",
      },
      {
        id: 3,
        ans: "By Using Semantic Tags we can improve accessibility and search engine optimization(SEO) of web page.",
      },
      {
        id: 4,
        ans: "Examples - header, nav, section, article, aside, footer, mark, main, figure, figcaption ",
      },
    ],
  },
  {
    id: 2,
    question: "What is the Diffrence between tags and elements",
    answer: [
      {
        id: 1,
        ans: "Tags - Tgas are building block of elements, they are use to write content within them",
      },
      {
        id: 2,
        ans: "Opening Tag - <>, Closing tag - < / >, Slef Closing Tag - < img / > ",
      },
      {
        id: 3,
        ans: "Elements - elements are the complete structure that HTML tags create, they include opening tag, closing tag, and the content within them ",
      },
      {
        id: 4,
        ans: "Example - < p > This is a paragraph. < / p > ",
      },
    ],
  },
  {
    id: 3,
    question: "Explain Attributes in HTML elements",
    answer: [
      {
        id: 1,
        ans: "Attributes provides additional information about the html element, they play an important role in elements appereance, behaviour and how elements interact with user and script",
      },
      {
        id: 2,
        ans: "They are always included in Opening Tag , they usally comes with name/value pairs - < name=value >,",
      },
      {
        id: 3,
        ans: "Common Attributes - class, id, src, href, alt, title etc.. ",
      },
    ],
  },
  {
    id: 4,
    question: "Explain block, inline and Inline Block elements",
    answer: [
      {
        id: 1,
        ans: "Block Elements - Block Elements take the full with of its parent components, and it always start from new line.",
      },
      {
        id: 2,
        ans: "Block Element - Height and width can be contriolled of the block elements, margin and padding are respected on all four sides.",
      },
      {
        id: 3,
        ans: "Inline elements - Inline element take the width according to the content within them, they do not start from new line. ",
      },
      {
        id: 4,
        ans: "Inline elements - We cannot set the Height and width of the inline element, and we can set margin and padding but only horizontally(left and right) not vertically(top - and bottom)",
      },
      {
        id: 5,
        ans: "Inline Block elements - its has the property of both block element and inline element, they don not start from new line.",
      },
      {
        id: 6,
        ans: "Inline Block elements - We can set width and height of the inline block element and Also we can set margin and padding of inline block element.",
      },
    ],
  },
  {
    id: 5,
    question:
      "Image is an inline element thenhow we can set the height and width to it",
    answer: [
      {
        id: 1,
        ans: "Inline elements are of two types:- 1. Replaced Inline 2.No Replaced Inline",
      },
      {
        id: 2,
        ans: "Replaced Inline Elements - those elements which comes through url, for ex - image, iframe and video comes through url, and on replaced inline element we can give height and width.",
      },
    ],
  },
  {
    id: 6,
    question: "Your question",
    answer: [
      {
        id: 1,
        ans: "Your answer",
      },
    ],
  },
];

const highlightWords = (text, words) => {
  let highlightedText = text;
  words.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    highlightedText = highlightedText.replace(regex, "<mark>$1</mark>");
  });
  return highlightedText;
};

const HtmlInterviewQuestions = () => {
  return (
    <div>
      <div>
        <div className="bg-lightblue py-24  sm:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-lightblue">
            {questions && questions.length > 0 ? (
              <>
                {questions.map((item, index) => (
                  <div
                    key={index}
                    className="mx-auto rounded-xl bg-white max-w-full py-6 shadow-md p-10 my-10 border-2 border-[rgb(244,244,244)] lg:text-center"
                  >
                    <p className="capitalize mt-2 pb-4 text-start text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {item.question}
                      {" ?"}
                    </p>
                    {item?.answer && item?.answer.length > 0 ? (
                      <>
                        {item.answer.map((i) => (
                          <div key={i.id} className="relative">
                            <p className="absolute top-[3%] py-2 text-xl font-bold">
                              {i.id}.
                            </p>
                            <p
                              className="capitalize text-start pl-6 py-2 text-xl font-semibold leading-8 text-gray-800"
                              dangerouslySetInnerHTML={{
                                __html: highlightWords(i.ans, [
                                  "marking",
                                  "meaning",
                                ]),
                              }}
                            ></p>
                          </div>
                        ))}
                      </>
                    ) : null}
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlInterviewQuestions;
