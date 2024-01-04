Hello this is a simple boilerplate for setting up highlights. Right now basic functionality like setting up controls and the number of bars that appear inside of the highlight is what is included here. 

Everything here can be modified to suit the use case that you need, if it needs to be setup for infinite scroll, or if you need to include it inside another library.


# Getting started
To use Highlights simply call the Highlights object after you import the JS:
  ```javascript
    let Highlight = new Highlights();
  ```

On instantiation Highlights will look for two key data-attributes:

1. highlight-attr-type="content-list" - Add this to the container where your slides are placed
   ```HTML
      <div class="highlight-asset-container" highlight-attr-type="content-list">

      </div>
   ```
    
2. highlight-attr-type="content" - Add this to each individaul content type inside your container.
   ```HTML
      <div highlight-attr-type="content-list">
        <img highlight-attr-type="content"></img>
        <img highlight-attr-type="content"></img>
        <img highlight-attr-type="content"></img>
      </div>

   ```

   Highlights will then automatically add the controls, by default clicking on the right will move to next content while clicking on the left will move to previous.
   Bars are automatically added as well depending on the number of content inside each container.

Highlights also include default CSS styles that you can use, but this is customizable as well depending on your needs.

  ```css
    [highlight-attr-type="content-list"] {
        height: calc(100dvh - 12dvh);
        position: relative;
        overflow: hidden;
      }

      [highlight-attr-type="content"] {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        z-index: 1;
      }

      [highlight-attr-type="content"]:first-child {
        position: relative;
        z-index: 2;
      }

      .highlight-bar-wrap {
        position: absolute;
        top: 14px;
        width: 100%;
        padding: 0px 14px;
        gap: 6px;
        z-index: 9;
        display: flex;
        box-sizing: border-box;
      }
      
      .highlight-bar {
        width: 100%;
        height: 2px;
        max-width: 100%;
        background-color: rgba(255,255,255,.35);
      }

      .highlight-progress {
        width: 0%;
        height: 100%;
        background-color: #fff;
      }

      .highlight-progress.active {
        width: 100%;
      }

  ```

## [Demo Link](https://lxpocampofrost.github.io/highlights/index.html)
