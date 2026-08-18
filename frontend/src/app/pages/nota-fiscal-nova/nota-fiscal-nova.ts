import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nota-fiscal-nova',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nota-fiscal-nova.html',
  styleUrl: './nota-fiscal-nova.css',
})
export class NotaFiscalNovaComponent {}
