import type { default_product_sort } from './default_product_sort';
import type { description } from './description';
import type { id } from './id';
import type { image_url } from './image_url';
import type { is_visible } from './is_visible';
import type { layout_file } from './layout_file';
import type { meta_description } from './meta_description';
import type { meta_keywords } from './meta_keywords';
import type { name } from './name';
import type { page_title } from './page_title';
import type { parent_id } from './parent_id';
import type { search_keywords } from './search_keywords';
import type { sort_order } from './sort_order';
import type { Url } from './Url';
import type { views } from './views';
export type Category = (id & parent_id & name & description & views & sort_order & page_title & meta_keywords & meta_description & layout_file & image_url & is_visible & search_keywords & default_product_sort & {
    url?: Url;
});
