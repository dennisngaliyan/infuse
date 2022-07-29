import React from "react";
import RenderNotif from "./renderNotif";

function Information() {
  return (
    <div className="p-5 border border-gray rounded-md flex flex-col gap-5">
      <RenderNotif
        title="Pemberitahuan"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae eros interdum, congue neque ac, interdum ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus molestie orci. Duis non nibh sed leo
        condimentum aliquet. Nam sit amet blandit sem, non egestas leo. Donec facilisis tortor non feugiat finibus. Proin interdum faucibus lorem ut iaculis."
      />
      <RenderNotif
        title="Pemberitahuan"
        description="Nulla fermentum neque a nulla pharetra dapibus. Sed porttitor porta lacus, quis pharetra enim laoreet vitae. Morbi et lobortis dolor, et molestie purus. Aliquam vestibulum odio et laoreet pulvinar. Morbi laoreet, odio vitae vestibulum tincidunt, felis felis sagittis felis, eget suscipit turpis odio ac dui. Praesent bibendum tortor in lorem aliquam, et suscipit nisi sagittis. Nulla eget arcu nibh."
      />
      <RenderNotif
        title="Pemberitahuan"
        description="Pellentesque eget lobortis nulla. Proin ultrices aliquam bibendum. Aliquam rutrum ac eros id condimentum. Nulla porttitor lacus eu euismod imperdiet. Suspendisse potenti. Sed porttitor laoreet tellus at venenatis. Aliquam quis egestas nunc."
      />
      <RenderNotif
        title="Pemberitahuan"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae eros interdum, congue neque ac, interdum ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus molestie orci. Duis non nibh sed leo
        condimentum aliquet. Nam sit amet blandit sem, non egestas leo. Proin interdum faucibus lorem ut iaculis."
      />
    </div>
  );
}

export default Information;
