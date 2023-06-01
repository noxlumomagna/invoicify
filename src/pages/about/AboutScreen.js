import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 font-title">
          <PageTitle title="About Me" />
          <div className="mt-4 mb-5 flex flex-row items-center">
            <div>
              <a
                href="https://github.com/noxlumomagna"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Derick Nguyen
              </a>
              <h1> Invoicify</h1>
            </div>
          </div>

          <PageTitle title="Invoicify" />
          <div className="mt-2 pl-4 text-sm">
            <ul class="list-disc">
              <li> Manage your products &amp; services</li>
              <li> Manage clients list</li>
              <li> Invoices are exportable as PDF or images </li>
            </ul>
          </div>
          <div className="font-title mt-3 mb-5">
            <div>
              
            </div>
            <div>
              📫 Social Links{" "}
              <a
                href="mailto:noxlumomagna@gmail.com"
                className="underline cursor-pointer"
              >
                noxlumomagna@gmail.com
              </a>{" "}
              (or){" "}
              <a
                href="https://www.linkedin.com/in/1derick-nguyen/" 
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                linkedin
              </a>
            </div>
            <div>
              <span>🎁 </span>
              <a
                href="https://github.com/noxlumomagna/invoicify"
                className="underline cursor-pointer"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                Repo Link Here
              </a>
            </div>
          </div>

          <PageTitle title="Built With" />
          <div className="mt-2 mb-5 pl-4 text-sm">
            <ul class="list-disc">
              <li> Framer Motion for Component Animations</li>
              <li> Lottiefiles for Dashboard Widgets &amp; Icons</li>
              <li> IndexedDB for Local Storage </li>
              <li> ReactJS </li>
            </ul>
          </div>

          <PageTitle title="Contact" />
          <div className="mt-2 pl-1 text-sm">
            <a
              href="tel:+18565202705"
              className="underline cursor-pointer"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              +18565202705
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;
