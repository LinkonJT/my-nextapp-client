import React from "react";

const AddProduct = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form className="space-y-4">
       <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Page details</legend>

  <label className="label">Wallpaper Title</label>
  <input type="text" className="input" placeholder="Wallpaper tittle" />

   <label className="label">Wallpaper Details</label>
  {/* <input type="text" placeholder="Product Name" className="input input-bordered w-full" /> */}
        <textarea placeholder="Details" className="textarea textarea-bordered w-full"></textarea>


   {/* Photo URL */}
          <label className="label">Photo URL</label>
          <input type="url" className="input input-bordered w-full" placeholder="https://example.com/wallpaper.jpg" />

   <label className="label">Size Available</label>
<select defaultValue="Pick a color" className="select">
  <option disabled={true}>Pick a available size</option>
  <option>Small, Large</option>
  <option>Large, Medium, Giant</option>
  <option>Giant</option>
  <option>Large</option>
  <option>S, M, L, Giant</option>
</select>
   <label className="label">Pick current size</label>
<select defaultValue="Pick a color" className="select">
  <option disabled={true}>Pick a size</option>
  <option>Small</option>
  <option>Medium</option>
  <option>Large</option>
  <option>Giant</option>
</select>
   <label className="label">Print Type</label>
<select defaultValue="Pick a color" className="select">
  <option disabled={true}>Pick a print type</option>
  <option>Standard Matte Finish</option>
  <option>Premium Glossy Vinyl </option>
 
</select>
   <label className="label">Price ($)</label>
<select defaultValue="Pick a color" className="select">
  <option disabled={true}>Pick a price ($)</option>
  <option>20</option>
  <option>30 </option>
  <option>40 </option>
  <option>50 </option>
 
</select>

 
</fieldset>
        <button type="submit" className="btn rounded-md bg-amber-300 text-black">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
