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
        title="Pemberitahuan 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae eros interdum, congue neque ac, interdum ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus molestie orci. Duis non nibh sed leo
        condimentum aliquet. Nam sit amet blandit sem, non egestas leo. Donec facilisis tortor non feugiat finibus. Proin interdum faucibus lorem ut iaculis."
      />
      <RenderNotif
        title="Pemberitahuan 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae eros interdum, congue neque ac, interdum ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus molestie orci. Duis non nibh sed leo
        condimentum aliquet. Nam sit amet blandit sem, non egestas leo. Donec facilisis tortor non feugiat finibus. Proin interdum faucibus lorem ut iaculis."
      />
      <RenderNotif
        title="Pemberitahuan 4"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae eros interdum, congue neque ac, interdum ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus molestie orci. Duis non nibh sed leo
        condimentum aliquet. Nam sit amet blandit sem, non egestas leo. Donec facilisis tortor non feugiat finibus. Proin interdum faucibus lorem ut iaculis."
      />
    </div>
  );
}

export default Information;
