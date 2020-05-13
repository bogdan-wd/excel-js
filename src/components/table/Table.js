import {ExcelComponent} from '../../core/ExcelComponents';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  toHTML () {
    return `
    <div class="row">
    <div class="row-info">
    </div>
    <div class="row-data">
        <div class="column">a</div>
        <div class="column">b</div>
        <div class="column">c</div>
        
    </div>
</div>


<div class="row">
    <div class="row-info">
        1
    </div>
    <div class="row-data">
        <div class="cell selected">1</div>
        <div class="cell">2</div>
        <div class="cell">3</div>
    </div>
</div>

<div class="row">
    <div class="row-info">
        1
    </div>
    <div class="row-data">
        <div class="cell" contenteditable="">1</div>
        <div class="cell" contenteditable="">2</div>
        <div class="cell" contenteditable="">3</div>
    </div>
</div>

    
    `;
  }
}
