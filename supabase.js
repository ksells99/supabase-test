const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const getProducts = async () => {
  let { data: products, error } = await supabase.from("products").select("*");
  console.log(products);
};

const getProductById = async (id) => {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);
  console.log(product);
};

getProducts();
getProductById(7);
