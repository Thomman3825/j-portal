import { Component, OnInit } from '@angular/core';
import { Job } from '../Job';
import { JobServiceService } from '../services/jobs.service';
@Component({
  selector: 'app-job-items',
  templateUrl: './job-items.component.html',
  styleUrls: ['./job-items.component.css']
})
export class JobItemsComponent implements OnInit{
  jobs: Job[]=[]
  constructor(private jobServices: JobServiceService){

  }
  ngOnInit(): void {
    this.jobServices.getJobs().subscribe((jobs)=> this.jobs = jobs)
  }

}

