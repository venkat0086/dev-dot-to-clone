import "../Styles/CreatePostPage.css";
import Navigation from "./Navigate";

export const CreatePostPage = () => {
  return (
    <>
      <Navigation />
      <div className="CreatePostPage_Body">
        <div className="CreatePostPage_MainDiv">
          <div className="CreatePostPage_MainDiv_FirstDiv">
            <div className="CreatePostPage_MainDiv_FirstDiv_1">
              <button className="CreatePostPage_btn">Add a Cover image</button>
            </div>
            <div className="CreatePostPage_textarea">
              <input
                type="text"
                placeholder="New post title here..."
                className="CreatePostPage_inputFirst"
              />
            </div>
            <div className="CreatePostPage_inputtwo">
              <input
                type="text"
                placeholder="Add up to 4 tags..."
                className="CreatePostPage_inputtwo_inputbox"
              />
            </div>
            <div className="CreatePostPage_textarea_Div">
              <textarea
                name="blogWritting"
                id=""
                cols="30"
                rows="10"
                placeholder="Write Your Post Content Here..."
              ></textarea>
            </div>
          </div>
          <div className="CreatePostPage_MainDiv_SecondDiv">
            <div className="_inside_div_CreatePostPage_MainDiv_SecondDiv">
              <h3>Writing a Great Post Title</h3>
              <p>
                Think of your post title as a super short (but compelling!)
                description like an overview of the actual post in one short
                sentence.
              </p>

              <p>
                Use keywords where appropriate to help ensure people can find
                your post by search.
              </p>
            </div>
          </div>
        </div>
        <div className="low_Button_Div">
          <div className="inside_low_Button_Div">
            <div>
              <button className="Low_button_div_btn">Publish</button>
              <button className="Low_button_div_btnSecond">Save draft</button>
              <button className="Low_button_div_btnthird">
                Revert New Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
