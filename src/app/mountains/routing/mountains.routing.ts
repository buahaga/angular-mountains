import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MountainsComponent } from '../mountains.component';
import { MountainsListComponent } from '../components/mountains-list/mountains-list.component';
import { MountainDetailsComponent } from '../components/mountain-details/mountain-details.component';
import { MountainsResolver } from '../resolvers/mountains.resolver';
import { MountainResolver } from '../resolvers/mountain.resolver';
import { CommentsResolver } from '../resolvers/comments.resolver';
import { MountainsCountResolver } from '../resolvers/mountains-count.resolver';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: `always`,
    component: MountainsComponent,
    children: [
      {
        path: '',
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        component: MountainsListComponent,
        resolve: {
          mountains: MountainsResolver,
          count: MountainsCountResolver,
        },
      },
      {
        path: ':id',
        runGuardsAndResolvers: `always`,
        component: MountainDetailsComponent,
        resolve: {
          mountain: MountainResolver,
          comments: CommentsResolver,
        },
      },
    ],
  },
];
export const MountainsRouting: ModuleWithProviders = RouterModule.forChild(routes);
