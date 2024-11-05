export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "food", label: "Food" },
      { id: "drinks", label: "Drinks" },
      { id: "household", label: "Household" },
      { id: "toiletries", label: "Toiletries" },
      { id: "baby", label: "Baby" },
      { id: "sport", label: "Sport" },
      { id: "outdoor", label: "Outdoor" },
      { id: "pets", label: "Pets" },
      { id: "toys", label: "Toys" },
      { id: "clothing-footwear", label: "Clothing & Footwear" },
      { id: "electronics", label: "Electronics" },
      { id: "gifts", label: "Gifts" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "external", label: "External" },
      { id: "internal", label: "Internal" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  food: "Food",
  drinks: "Drinks", 
  household: "Household",
  toiletries: "Toiletries",
  baby: "Baby",
  sport: "Sport",
  outdoor: "Outdoor", 
  pets: "Pets",
  toys: "Toys",
  "clothing-footwear": "Clothing & Footwear",
  electronics: "Electronics",
  gifts: "Gifts",
};

export const brandOptionsMap = {
  internal: "Internal",
  external: "External",
};

export const filterOptions = {
  category: [
    { id: "food", label: "Food" },
    { id: "drinks", label: "Drinks" },
    { id: "household", label: "Household" },
    { id: "toiletries", label: "Toiletries" },
    { id: "baby", label: "Baby" },
    { id: "sport", label: "Sport" },
    { id: "outdoor", label: "Outdoor" },
    { id: "pets", label: "Pets" },
    { id: "toys", label: "Toys" },
    { id: "clothing-footwear", label: "Clothing & Footwear" },
    { id: "electronics", label: "Electronics" },
    { id: "gifts", label: "Gifts" },
  ],
  brand: [
    { id: "internal", label: "Internal" },
    { id: "external", label: "External" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
