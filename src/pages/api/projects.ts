import type { NextApiRequest, NextApiResponse } from 'next';
import { collection, query, getDocs, DocumentData } from "firebase/firestore";
import { db } from '../../firebase/firebase';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<DocumentData>,
) {
  try {
    const q = query(collection(db, "projects"));
    const querySnapshot = await getDocs(q);
    const projects = <DocumentData>[];
    querySnapshot.forEach((doc) => {
      projects.push({ [doc.id]: doc.data() });
    }); 
    projects.reverse();
    return res.status(200).json({ projects });
  } catch (err) {
    const error = err as Error;
    return res.status(500).json({ message: error.message })
  }
}
