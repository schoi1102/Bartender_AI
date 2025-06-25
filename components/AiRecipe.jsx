import React from "react";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";

export default function AiRecipe(props) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Bartender AI Suggested Recipe:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
