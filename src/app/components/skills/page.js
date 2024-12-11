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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti accusantium iure quo error debitis perferendis,
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti accusantium iure quo error debitis perferendis,
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti accusantium iure quo error debitis perferendis,
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti accusantium iure quo error debitis perferendis,
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti accusantium iure quo error debitis perferendis,
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti accusantium iure quo error debitis perferendis,
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti accusantium iure quo error debitis perferendis,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
