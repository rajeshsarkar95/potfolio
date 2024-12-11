import React from "react";
import "./skills.css";
import Image from "next/image";

function Skill() {
  return (
    <>
      <h1 className="Skills_heading">Skills:</h1>
      <h1 className="Skills_heading">Language</h1>
      <div className="card_conatainer">
        <div className="sub_card">
          <div className="card">
            <div className="card_images">
              <Image
                src="/images/javascript.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="content">
              <h1 className="java_script">javascript</h1>
              <p className="javascript_difination">
              JavaScript is a scripting language that enables dynamic, interactive content creation, allowing real-time updates and user interaction on webpages.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* frontend */}
      <h1 className="Skills_heading">Frontend</h1>
      <div className="card_conatainer">
        <div className="sub_card">
          <div className="card">
            <div className="card_images">
              <Image
                src="/images/react.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="content">
              <h1 className="java_script">React js</h1>
              <p className="javascript_difination">
              React.js is a JavaScript library for building user interfaces, enabling fast, efficient, and dynamic web applications using components.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card">
            <div className="card_images">
              <Image
                src="/images/html.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="content">
              <h1 className="java_script">Html</h1>
              <p className="javascript_difination">
              HTML HyperText Markup Language is the standard language used to create and structure content on the web, such as text, images, and links.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card">
            <div className="card_images">
              <Image
                src="/images/next.js.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="content">
              <h1 className="java_script">Next js</h1>
              <p className="javascript_difination">
              Next.js is a React framework that enables server-side rendering, static site generation, and easy routing, enhancing performance and SEO.
              </p>
            </div>
          </div>
          {/* card 4 */}
          <div className="card">
            <div className="card_images">
              <Image
                src="/images/css.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="content">
              <h1 className="java_script">CSS</h1>
              <p className="javascript_difination">
              CSS for Cascading Style Sheets is a stylesheet language used to describe the presentation of a web page, including layout, colors, fonts, and spacing.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*backend*/}
      <h1 className="Skills_heading">backend</h1>
      <div className="card_conatainer">
        <div className="sub_card">
          <div className="card">
            <div className="card_images">
              <Image
              style={{backgroundColor:"white"}}
                src="/images/nodejs.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="content">
              <h1 className="java_script">Node js</h1>
              <p className="javascript_difination">
              Node.js is a JavaScript runtime built on Chrome s V8 engine that allows server-side scripting, enabling fast and scalable network applications.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card">
            <div className="card_images">
              <Image
                style={{backgroundColor:"white"}}
                src="/images/express.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="content">
              <h1 className="java_script">Express js</h1>
              <p className="javascript_difination">
              Express.js is a lightweight web application framework for Node.js, designed to build robust APIs and web applications with minimal setup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
