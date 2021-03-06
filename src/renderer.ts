
import {
  Widget
} from 'phosphor/lib/ui/widget';

import {
  JSONObject
} from 'phosphor/lib/algorithm/json';

import {
  RenderMime
} from 'jupyterlab/lib/rendermime';

import {
  RenderedVega, RenderedVegaLite
} from './rendererwidget';


export
class VegaRenderer implements RenderMime.IRenderer {
  /**
   * The mimetypes this renderer accepts.
   */
  mimetypes = ['application/vnd.vega+json'];

  /**
   * Whether the input can safely sanitized for a given mimetype.
   */
  isSanitizable(mimetype: string): boolean {
    return this.mimetypes.indexOf(mimetype) !== -1;
  }

  /**
   * Whether the input is safe without sanitization.
   */
  isSafe(mimetype: string): boolean {
    return false;
  }

  /**
   * Render the transformed mime bundle.
   */
  render(options: RenderMime.IRendererOptions<JSONObject>): Widget {
    return new RenderedVega(options);
  }
}


export
class VegaLiteRenderer implements RenderMime.IRenderer {
  /**
   * The mimetypes this renderer accepts.
   */
  mimetypes = ['application/vnd.vegalite+json'];

  /**
   * Whether the input can safely sanitized for a given mimetype.
   */
  isSanitizable(mimetype: string): boolean {
    return this.mimetypes.indexOf(mimetype) !== -1;
  }

  /**
   * Whether the input is safe without sanitization.
   */
  isSafe(mimetype: string): boolean {
    return false;
  }

  /**
   * Render the transformed mime bundle.
   */
  render(options: RenderMime.IRendererOptions<JSONObject>): Widget {
    return new RenderedVegaLite(options);
  }
}
