export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

export type PrintfulProduct = {
  id: number
  external_id: string
  name: string
  variants: number
  synced: number
  thumbnail_url: string
  is_ignored: boolean
}

interface PrintfulCatalogProduct {
  variant_id: number
  product_id: number
  image: string
  name: string
}

interface PrintfulFile {
  id: number
  type: "default" | "preview" | string
  hash: string
  url: string | null
  filename: string
  mime_type: string
  size: number
  width: number
  height: number
  dpi: number | null
  status: "ok" | string
  created: number
  thumbnail_url: string
  preview_url: string
  visible: boolean
  is_temporary: boolean
  message: string
  stitch_count_tier: string | null
}

export type PrintfulProductDetails = {
  id: number
  external_id: string
  sync_product_id: number
  name: string
  synced: boolean
  variant_id: number
  main_category_id: number
  warehouse_product_id: number | null
  warehouse_product_variant_id: number | null
  retail_price: string
  sku: string
  currency: string
  product: PrintfulCatalogProduct
  files: PrintfulFile[]
  options: unknown[] // Add specific type if you use options
  is_ignored: boolean
  size: string
  color: string
  availability_status:
    | "active"
    | "discontinued"
    | "out_of_stock"
    | "temporary_out_of_stock"
}

export type ShopifyProduct = {
  id: number
  title: string
  body_html: string
  vendor: string
  product_type: string
  created_at: string
  handle: string
  updated_at: string
  published_at: string
  template_suffix: string | null
  status: "active" | "draft" | "archived"
  published_scope: "web" | "global"
  tags: string
  admin_graphql_api_id: string
  variants: Array<{
    id: number
    title: string
    price: string
    sku: string
    position: number
    inventory_policy: string
    compare_at_price: string | null
    fulfillment_service: string
    inventory_management: string | null
    option1: string
    option2: string | null
    option3: string | null
    created_at: string
    updated_at: string
    taxable: boolean
    barcode: string | null
    grams: number
    image_id: number | null
    weight: number
    weight_unit: string
    inventory_item_id: number
    inventory_quantity: number
    old_inventory_quantity: number
    requires_shipping: boolean
    admin_graphql_api_id: string
  }>
  options: Array<{
    id: number
    name: string
    position: number
    values: string[]
  }>
  images: Array<{
    id: number
    product_id: number
    position: number
    created_at: string
    updated_at: string
    alt: string | null
    width: number
    height: number
    src: string
    variant_ids: number[]
    admin_graphql_api_id: string
  }>
  image: {
    id: number
    product_id: number
    position: number
    created_at: string
    updated_at: string
    alt: string | null
    width: number
    height: number
    src: string
    variant_ids: number[]
    admin_graphql_api_id: string
  } | null
}
