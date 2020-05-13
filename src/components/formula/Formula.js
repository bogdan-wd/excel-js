import {ExcelComponent} from '../../core/ExcelComponents';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  toHTML () {
    return `
    <div class="excel__formula">
    <div class="excel__formula-info">
        fx
    </div>
    <input type="text" class="excel__formula-input">
</div>
    `;
  }
}
