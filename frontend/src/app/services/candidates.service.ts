import {Injectable} from '@angular/core';
import {env} from "../../../env/env";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

export type TCandidate = {
  name: string,
  surname: string,
  seniority: 'junior' | 'senior',
  years: number,
  availability: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  subject = new BehaviorSubject<TCandidate[]>([]);

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get<TCandidate[]>(`${env.backend_host}/candidates`).subscribe(this.subject);
  }

  uploadCandidate(data: TCandidate) {
    const newCandidates = [...this.subject.getValue(), data];
    this.subject.next(newCandidates);
    this.httpClient.post<TCandidate[]>(`${env.backend_host}/candidates`, data).subscribe(this.subject);
  }

  getCandidatesObservable(): Observable<TCandidate[]> {
    return this.subject;
  }
}
