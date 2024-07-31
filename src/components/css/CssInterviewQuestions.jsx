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

const CssInterviewQuestions = () => {
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

export default CssInterviewQuestions;
