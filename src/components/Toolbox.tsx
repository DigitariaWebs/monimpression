"use client";
import { useRef } from 'react';

type Props = {
  onAddText: () => void;
  onUploadImage: (file: File) => void;
  onColor: (color: string) => void;
  onDelete: () => void;
  onFontFamily: (family: string) => void;
  onFontSize: (size: number) => void;
  onBold: () => void;
  onItalic: () => void;
  onAlign: (align: 'left' | 'center' | 'right') => void;
  onStroke: (color: string) => void;
  onStrokeWidth: (w: number) => void;
  onDuplicate: () => void;
  onForward: () => void;
  onBackward: () => void;
  onToggleGrid: () => void;
  onSetSide: (s: 'front' | 'back') => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  onExport: () => void;
};

export default function Toolbox(props: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="card p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="font-semibold">Outils</div>
        <div className="flex gap-2">
          <button className="btn-primary" onClick={() => props.onSetSide('front')}>Avant</button>
          <button className="btn-primary" onClick={() => props.onSetSide('back')}>Arrière</button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="btn-primary" onClick={props.onAddText}>Ajouter du texte</button>
        <button className="btn-primary" onClick={() => inputRef.current?.click()}>Importer une image</button>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e)=>{ const f = e.target.files?.[0]; if (f) props.onUploadImage(f); e.currentTarget.value=''; }} />
        <button className="btn-primary" onClick={props.onDuplicate}>Dupliquer</button>
        <button className="btn-primary" onClick={props.onForward}>Avant-plan</button>
        <button className="btn-primary" onClick={props.onBackward}>Arrière-plan</button>
        <button className="btn-primary" onClick={props.onDelete}>Supprimer</button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <label className="text-xs text-slate-500">Police</label>
          <select onChange={(e)=>props.onFontFamily(e.target.value)} className="border rounded-md px-3 py-2 w-full">
            <option value="Poppins">Poppins</option>
            <option value="Arial">Arial</option>
            <option value="Impact">Impact</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs text-slate-500">Taille</label>
          <input type="range" min={10} max={96} defaultValue={28} onChange={(e)=>props.onFontSize(parseInt(e.target.value))} />
        </div>
        <div className="space-y-2">
          <label className="text-xs text-slate-500">Couleur</label>
          <input type="color" onChange={(e)=>props.onColor(e.target.value)} className="h-10 w-full rounded-md border" />
        </div>
        <div className="space-y-2">
          <label className="text-xs text-slate-500">Contour</label>
          <input type="color" onChange={(e)=>props.onStroke(e.target.value)} className="h-10 w-full rounded-md border" />
        </div>
        <div className="space-y-2">
          <label className="text-xs text-slate-500">Épaisseur contour</label>
          <input type="range" min={0} max={8} defaultValue={0} onChange={(e)=>props.onStrokeWidth(parseInt(e.target.value))} />
        </div>
        <div className="space-y-2">
          <label className="text-xs text-slate-500">Style</label>
          <div className="flex gap-2">
            <button className="btn-primary" onClick={props.onBold}>Gras</button>
            <button className="btn-primary" onClick={props.onItalic}>Italique</button>
          </div>
        </div>
        <div className="space-y-2 col-span-2">
          <label className="text-xs text-slate-500">Alignement</label>
          <div className="flex gap-2">
            <button className="btn-primary" onClick={()=>props.onAlign('left')}>Gauche</button>
            <button className="btn-primary" onClick={()=>props.onAlign('center')}>Centre</button>
            <button className="btn-primary" onClick={()=>props.onAlign('right')}>Droite</button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="btn-primary" onClick={props.onZoomOut}>− Zoom</button>
        <button className="btn-primary" onClick={props.onZoomIn}>+ Zoom</button>
        <button className="btn-primary" onClick={props.onResetZoom}>Reset</button>
        <button className="btn-primary" onClick={props.onToggleGrid}>Grille</button>
        <button className="btn-primary" onClick={props.onExport}>Télécharger PNG</button>
      </div>

      <p className="text-sm text-slate-600">Astuce: cliquez sur un élément pour l’activer, utilisez la touche Suppr pour le retirer, Ctrl+D pour dupliquer.</p>
    </div>
  );
}


