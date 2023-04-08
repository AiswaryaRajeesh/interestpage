import React, { useState } from 'react';

function App() {
  const [interests, setInterests] = useState([]);

  const handleInterestChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setInterests((prevInterests) => [...prevInterests, value]);
    } else {
      setInterests((prevInterests) =>
        prevInterests.filter((interest) => interest !== value)
      );
    }
  };

  const handleOtherTextChange = (event) => {
    const { value } = event.target;
    setInterests((prevInterests) => {
      const otherIndex = prevInterests.indexOf('Other');
      if (otherIndex === -1) {
        return [...prevInterests, 'Other', value];
      } else {
        const updatedInterests = [...prevInterests];
        updatedInterests[otherIndex + 1] = value;
        return updatedInterests;
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(interests);
    // Submit interests to server or perform other actions here
  };

  return (
    <div style={{ backgroundColor: 'lavender', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>CHOOSE YOUR INTEREST....!</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', padding: '10px' }}>
        <div className="box" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <input
              type="checkbox"
              id="web-dev"
              name="interest[]"
              value="Web Development"
              onChange={handleInterestChange}
              checked={interests.includes('Web Development')}
            />
            <label htmlFor="web-dev" className="emoji" style={{ fontSize: '30px' }}>
              🌐
            </label>
            <span style={{ marginLeft: '5px' }}>Web Development</span>
          </div>
          <div style={{ marginRight: '10px' }}>
            <input
              type="checkbox"
              id="design"
              name="interest[]"
              value="Design"
              onChange={handleInterestChange}
              checked={interests.includes('Design')}
            />
            <label htmlFor="design" className="emoji" style={{ fontSize: '30px' }}>
              🎨
            </label>
            <span style={{ marginLeft: '5px' }}>Design</span>
          </div>
          <div style={{ marginRight: '10px' }}>
            <input
              type="checkbox"
              id="editing"
              name="interest[]"
              value="Editing"
              onChange={handleInterestChange}
              checked={interests.includes('Editing')}
            />
            <label htmlFor="editing" className="emoji" style={{ fontSize: '30px' }}>
              🎬
            </label>
            <span style={{ marginLeft: '5px' }}>Editing</span>
          </div>
          <div style={{ marginRight: '10px' }}>
            <input
              type="checkbox"
              id="photography"
              name="interest[]"
              value="Photography"
              onChange={handleInterestChange}
              checked={interests.includes('Photography')}
/>
<label htmlFor="photography" className="emoji" style={{ fontSize: '30px' }}>
📷
</label>
<span style={{ marginLeft: '5px' }}>Photography</span>
</div>
<div style={{ marginRight: '10px' }}>
<input
type="checkbox"
id="music"
name="interest[]"
value="Music"
onChange={handleInterestChange}
checked={interests.includes('Music')}
/>
<label htmlFor="music" className="emoji" style={{ fontSize: '30px' }}>
🎶
</label>
<span style={{ marginLeft: '5px' }}>Music</span>
</div>
<div style={{ marginRight: '10px' }}>
<input
type="checkbox"
id="cooking"
name="interest[]"
value="Cooking"
onChange={handleInterestChange}
checked={interests.includes('Cooking')}
/>
<label htmlFor="cooking" className="emoji" style={{ fontSize: '30px' }}>
🍳
</label>
<span style={{ marginLeft: '5px' }}>Cooking</span>
</div>
<div style={{ marginRight: '10px' }}>
<input
type="checkbox"
id="sports"
name="interest[]"
value="Sports"
onChange={handleInterestChange}
checked={interests.includes('Sports')}
/>
<label htmlFor="sports" className="emoji" style={{ fontSize: '30px' }}>
⚽
</label>
<span style={{ marginLeft: '5px' }}>Sports</span>
</div>
<div style={{ marginRight: '10px' }}>
<input
type="checkbox"
id="other"
name="interest[]"
value="Other"
onChange={handleInterestChange}
checked={interests.includes('Other')}
/>
<label htmlFor="other" className="emoji" style={{ fontSize: '30px' }}>
💡
</label>
<span style={{ marginLeft: '5px' }}>Other:</span>
</div>
<input type="text" name="otherText" onChange={handleOtherTextChange} />
</div>
<button type="submit" style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: 'darkcyan', color: 'white', fontSize: '20px', cursor: 'pointer' }}>
Submit
</button>
</form>
</div>
);
}

export default App;
