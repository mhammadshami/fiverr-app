import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages"> Messages > John Doe ></Link>
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              explicabo dolores, facilis consectetur doloremque non nihil alias,
              blanditiis corporis perspiciatis eos nemo iusto! Fugit id
              temporibus quibusdam hic officia vero, cupiditate nobis facere
              ipsum exercitationem ipsam odit iure vel corporis. Animi.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              explicabo dolores, facilis consectetur doloremque non nihil alias,
              blanditiis corporis perspiciatis eos nemo iusto! Fugit id
              temporibus quibusdam hic officia vero, cupiditate nobis facere
              ipsum exercitationem ipsam odit iure vel corporis. Animi.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              explicabo dolores, facilis consectetur doloremque non nihil alias,
              blanditiis corporis perspiciatis eos nemo iusto! Fugit id
              temporibus quibusdam hic officia vero, cupiditate nobis facere
              ipsum exercitationem ipsam odit iure vel corporis. Animi.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              explicabo dolores, facilis consectetur doloremque non nihil alias,
              blanditiis corporis perspiciatis eos nemo iusto! Fugit id
              temporibus quibusdam hic officia vero, cupiditate nobis facere
              ipsum exercitationem ipsam odit iure vel corporis. Animi.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              explicabo dolores, facilis consectetur doloremque non nihil alias,
              blanditiis corporis perspiciatis eos nemo iusto! Fugit id
              temporibus quibusdam hic officia vero, cupiditate nobis facere
              ipsum exercitationem ipsam odit iure vel corporis. Animi.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              explicabo dolores, facilis consectetur doloremque non nihil alias,
              blanditiis corporis perspiciatis eos nemo iusto! Fugit id
              temporibus quibusdam hic officia vero, cupiditate nobis facere
              ipsum exercitationem ipsam odit iure vel corporis. Animi.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder="write a message" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
