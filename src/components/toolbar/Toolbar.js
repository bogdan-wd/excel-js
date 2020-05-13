import {ExcelComponent} from '../../core/ExcelComponents';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  toHTML () {
    return `
    <div class="btn">
    <i class="material-icons">format_align_left</i>
</div>

<div class="btn">
    <i class="material-icons">format_align_center</i>
</div>

<div class="btn">
    <i class="material-icons">format_align_right</i>
</div>

<div class="btn">
    <i class="material-icons">format_bold</i>
</div>

<div class="btn">
    <i class="material-icons">format_italic</i>
</div>

<div class="btn">
    <i class="material-icons">format_underline</i>
</div>

    `;
  }
}
