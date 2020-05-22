import React from 'react'
import ReactDOM from 'react-dom'

export const App = () => {
  return (
    <div className="container">
      <h1 className="my3">React Parcel Boilerplate!</h1>
      <div className="grid grid-2column grid-sm-gap mt5">
        <div>
          <h3 className="mb4">Buttons</h3>
          <div className="btn btn-primary m1">Primary Button</div> :: btn btn-primary<br />
          <div className="btn btn-success m1">Success Button</div> :: btn btn-success<br />
          <div className="btn btn-warning m1">Warning Button</div> :: btn btn-warning<br />
          <div className="btn btn-danger m1">Danger Button</div> :: btn btn-danger<br />
          <div className="btn btn-info m1">Info Button</div> :: btn btn-info<br /><br /><br />
          <div className="btn btn-primary-outline m1">Primary Button</div> :: btn btn-primary-outline<br />
          <div className="btn btn-success-outline m1">Success Button</div> :: btn btn-success-outline<br />
          <div className="btn btn-warning-outline m1">Warning Button</div> :: btn btn-warning-outline<br />
          <div className="btn btn-danger-outline m1">Danger Button</div> :: btn btn-danger-outline<br />
          <div className="btn btn-info-outline m1">Info Button</div> :: btn btn-info-outline<br /><br /><br />
        </div>
        <div>
          <h3 className="mb4">Margins and Paddings</h3>
          m_ :: Margin on ALL sides (1-6)<br />
          mx_ :: Margin Left and Right<br />
          my_ :: Margin Top and Bottom<br />
          mt_ :: Margin Top<br />
          mb_ :: Margin Bottom<br />
          ml_ :: Margin Left<br />
          mr_ :: Margin Right<br /><br />

          p_ :: Padding on ALL sides (1-6)<br />
          px_ :: Padding Left and Right<br />
          py_ :: Padding Top and Bottom<br />
          pt_ :: Padding Top<br />
          pb_ :: Padding Bottom<br />
          pl_ :: Padding Left<br />
          pr_ :: Padding Right<br /><br />
        </div>
        <div>
          <h3 className="mb4">Grid Containers</h3>
          &lt;div class="grid"&gt; :: start of a grid<br />
          &lt;div class="grid grid-2column"&gt; :: 2-column grid<br />
          &lt;div class="grid grid-3column"&gt; :: 3-column grid<br />
          &lt;div class="grid grid-4column"&gt; :: 4-column grid<br />
          &lt;div class="grid grid-sm-gap"&gt; :: small gap<br />
          &lt;div class="grid grid-md-gap"&gt; :: medium gap<br />
          <br /><br /><br />
        </div>
        <div>
          <h3 className="mb4">Loader</h3>
          &lt;div class="loader"&gt; :: Load Spinner
          <div className="loader" />
        </div>
        <div>
          <h3 className="mb4">Icon Fonts</h3>
          Icons are created and provided by ICOMOON<br /><br />
          <span className="icon-menu1" /> :: &lt;span class="icon-menu1" /&gt;<br />
          <span className="icon-equalizer2" /> :: &lt;span class="icon-equalizer2" /&gt;<br />
          <span className="icon-instagram" /> :: &lt;span class="icon-instagram" /&gt;<br />
          <span className="icon-play" /> :: &lt;span class="icon-play" /&gt;<br />
          <span className="icon-mediacontrol" /> :: &lt;span class="icon-mediacontrol" /&gt;<br />
          <span className="icon-clock" /> :: &lt;span class="icon-clock" /&gt;<br />
          <span className="icon-youtube" /> :: &lt;span class="icon-youtube" /&gt;<br />
          <br /><br /><br />
        </div>
        <div>
          <h3 className="mb4">Form Elements</h3>
          <form>
            <label for="formname">Name</label>
            <input type="text" id="formname" name="formname" />
            <label for="music">What Music Do You Like?</label>
            <select id="music" name="music">
              <option>Alternative</option>
              <option>Christian</option>
              <option>Jazz</option>
              <option>Rock</option>
            </select>
            <label for="formcomments">Comments</label>
            <textarea name="formcomments" id="formcomments" rows={5} />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))