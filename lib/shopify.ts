export async function fetchProductsREST() {
  const res = await fetch(
    `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2023-01/products.json`,
    {
      headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_PASSWORD!,
        "Content-Type": "application/json"
      }
    }
  )

  if (!res.ok) {
    throw new Error(`Shopify REST error: ${res.status}`)
  }

  const json = await res.json()
  return json.products
}
