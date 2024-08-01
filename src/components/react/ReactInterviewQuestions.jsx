import React from "react";
import reduxmiddlewareimg1 from "../../assets/reduxmiddlewareimg1.png";
import reduxmiddlewareimg2 from "../../assets/reduxmiddlewaresimg2.png";

const questions = [
  {
    id: 1,
    question: "What are Middlewares? Types of Middlewares used in React",
    answer: [
      {
        id: 1,
        ans: "Middlewares are something which gives a bridge between processsing incoming  request and outgoing response between the client and server",
      },
      {
        id: 2,
        ans: "Middleware in React (particularly with Redux) helps in handeling side effect, making asynchronous action and maintaning cleaner and more manageable code.",
      },
      {
        id: 3,
        ans: "Common Middleware used in React Application with Redux are:- <br /> 1. Redux Thunk <br /> 2. Redux Saga <br /> 3. Redux Logger <br /> 4. Redux Promise ",
      },
      {
        id: 3,
        img: reduxmiddlewareimg1,
        ans: "Hum apne React Application se jab bhi koi action dispatch karte hai to action directly reducer tak pohoch jata hai aur reducer pe jake usko update kar deta hai.",
      },
      {
        id: 4,
        ans: "But agar hume koi API call karni ho to hum reducer ke aandar nhi kar sakte hai, because reducer pure function hote hai...pure function means kabhi bhi koi input uske aandar dala jaye to output same ho. <br /> (same input = same output) === pure function",
      },
      {
        id: 5,
        ans: "Pure function predictable hone chahiye, Lekin API jab call hoti hai wo predictable nhi hoti hai, kabhi network issue aa jata hai, ya kayi baar wo fail ho jati hai",
      },
      {
        id: 6,
        ans: "To iske liye hum reducer tak pohochne se pehele hi ek naya function add kar dete hai, jo ki hota hai, use hum middleware kehte hai.",
      },
      {
        id: 7,
        img: reduxmiddlewareimg2,
        ans: "Basically middleware ek function hota hai ki dispatch karne ke aur reducer tak pohochne ke bich me wo chalta hai.",
      },
      {
        id: 8,
        ans: "to humara jo action hai wo pehele middleware tak pohochenga aur agar middleware chahenga to tabhi wo reducer tak pohochenga wo bich me usko rok bhi sakta hai agar koi error aaye to.",
      },
      {
        id: 9,
        ans: "Middleware concept can also apply to other areas in react application such as:- <br /> 1. Middleware for routing - Custom route handling logic in react router such as authentication guards. <br /> 2. Middlewares for API calls - function that intercepts and modify request or response like axios interceptors.",
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

const ReactInterviewQuestions = () => {
  return (
    <div>
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
                              {i?.img && (
                                <div>
                                  <img src={i?.img} alt="" />
                                </div>
                              )}
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
    </div>
  );
};

export default ReactInterviewQuestions;
