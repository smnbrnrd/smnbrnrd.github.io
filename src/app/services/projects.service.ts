import { Injectable } from '@angular/core';
import { Project } from "../data/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private _projects: Project[] = [
    {
      acronym : "DEEDS",
      title: "Deep Ensembles for Evolving Data Streams",
      funding: "CAPES-COFECUB",
      years: "2025-2028",
      link: "https://www.ppgia.pucpr.br/~jean.barddal/projects/5_CAPES_COFECUB/",
      abstract: "The DEEDS project brings together researchers from the University of Rouen Normandy and the " +
        "Pontifícia Universidade Católica do Paraná (PUCPR) and aims to develop deep ensemble methods for " +
        "data streams, focusing on the problems of class imbalance, anomaly detection, and novelty detection."
    },
    {
      acronym : "ODD",
      title: "Online Deep Anomaly Detection",
      funding: "ANR (PRME)",
      years: "2023-2027",
      link: "https://odd.projets.litislab.fr/",
      abstract: "ODD is a single-team ('mono-équipe') research project involving a dozen researchers from the machine learning " +
        "team of the LITIS lab., and focusing on anomaly detection in time series using deep learning methods."
    },
    {
      acronym : "PINNterfaces",
      title: "Modeling interfaces in granular media using physics informed neural networks",
      funding: "ANR (PRC)",
      years: "2023-2027",
      link: "",
      abstract: "This project brings together the LEMTA lab. (Nancy, France), the LMRS lab. (Rouen, France) " +
        "and the LITIS lab., around physics-informed machine learning paradigm for modeling interfaces in granular " +
        "media."
    },
    {
      acronym : "LLiSa",
      title: "Laboratoire Commun LITIS Saagie",
      funding: "ANR (LabCom)",
      years: "2021-2026",
      link: "https://llisa.projets.litislab.fr/",
      abstract: "This project is a joint laboratory between LITIS and the company Saagie, which aims to develop AI " +
        "models within a general framework of multitask statistical learning and regularization for the use of " +
        "incomplete data."
    },
    {
      acronym : "MMLARP",
      title: "Multimodal/multiview learning applied to real problems",
      funding: "CAPES STIC-AmSud",
      years: "2024-2025",
      link: "https://www.ppgia.pucpr.br/~alceu/sticamsud_2024/",
      abstract: "MMLARP is a scientific-technological cooperation program that involves more than 20 researchers from " +
        "Brazil, Chile and France around multimodal/multiview learning paradigms," +
        " for applications in medical image analysis, document image retrieval and automotive safety."
    }
  ]
  constructor() { }
  public get projects(): ReadonlyArray<Project> {
    return this._projects;
  }
}
