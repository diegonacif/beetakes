import { doc, getDoc, increment, setDoc } from "firebase/firestore";
import { db } from "../services/firebase.config";

export enum TipoEvento {
  VISITA_HOME = 'visita_home',
  VISITA_LINKTREE = 'visita_linktree',
  VISITA_CONTACT_FORM = 'visita_contact_form',
  CLIQUE_BOTAO_ORCAMENTO = 'clique_botao_orcamento',
  CLIQUE_LINKTREE_ORCAMENTO = 'clique_linktree_orcamento',
  CLIQUE_LINKTREE_SITE = 'clique_linktree_site',
  CLIQUE_LINKTREE_WHATSAPP = 'clique_linktree_whatsapp',
  CLIQUE_LINKTREE_YOUTUBE = 'clique_linktree_youtube',
  CLIQUE_LINKTREE_FACEBOOK = 'clique_linktree_facebook',
  CLIQUE_LINKTREE_TIKTOK = 'clique_linktree_tiktok',
  CLIQUE_LINKTREE_MAIL = 'clique_linktree_mail',
}

export async function incrementarEventoDiario(tipoEvento: TipoEvento) {
  const hoje = new Date().toISOString().split('T')[0];
  const docRef = doc(db, 'eventos', tipoEvento, 'diarios', hoje);
  
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    await setDoc(docRef, { count: increment(1) }, { merge: true });
  } else {
    await setDoc(docRef, { count: 1 });
  }
}
