[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/s-roueche/bespoke-table">
    <img src="images/bespoke-table.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Bespoke-Table</h3>
  <p align="center">
    A react table generator compatible with all design systems, just stay focus on your UX/UI.
    <br />
    <a href="https://s-roueche.github.io/bespoke-table"><strong>View Demo</strong></a>
    <br />
    <br />
    <a href="https://github.com/s-roueche/bespoke-table/issues">Report Bug</a>
    ·
    <a href="https://github.com/s-roueche/bespoke-table/issues">Request Feature</a>
    .
    <a href="https://s-roueche.github.io/bespoke-table/CONTRIBUTING.md">Contributing</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Bespoke-table Shot][product-screenshot]](https://example.com)

# Bespoke-Table

BespokeTable is a flexible and extensible React library base on grid css for generate tables. Designed to
seamlessly integrate with any
design system, it allows developers to focus on styling and user experience while efficiently managing the table's
structure and functionality.

Designed with flexibility in mind, this component is perfect for developers who want full control over their table's
appearance and behavior without the bloat of heavier solutions.

Be careful, it's not recommended to use Bespoke-Table for SEO purpose. The table generated is
base on div and css grid. That give you a lot of flexibility but it's not SEO friendly.

## Features

- **Flexible**: Integrates with any design system for custom styling.
- **Extensible**: Easily extendable with custom features as per project requirements.
- **Type-safe**: Fully typed with TypeScript for an enhanced development experience.
- **React-friendly**: Utilizes the latest React features for seamless integration.
- **Performant**: Optimized for fast performance, even with large data sets.

## Installation

You can install Bespoke-Table using npm or yarn:

```bash
npm i @sroueche/bespoketable
```

or

```bash
yarn add @sroueche/bespoketable
```

## Usage

To start using Bespoke-Table, this is a simple example of how to use it :

```tsx
import React from 'react';
import BespokeTable, { TableHeaderProps } from '@sroueche/bespoketable';

const MyTable = () => {
  const data = [{
    rowId: 'row-1',
    cells: [
      {
        headerId: 'col-id',
        cellData: {
          value: 'rover-curiosity',
        },
      },
      {
        headerId: 'col-name',
        cellData: {
          value: 'Curiosity',
        },
      },
      {
        headerId: 'col-status',
        cellData: {
          value: 'active',
        },
      },
      {
        headerId: 'col-photos-count',
        cellData: {
          value: '693,552',
        },
      },
    ],
  }, {
    rowId: 'row-2',
    cells: [
      {
        headerId: 'col-id',
        cellData: {
          value: 'rover-perseverance',
        },
      },
      {
        headerId: 'col-name',
        cellData: {
          value: 'Perseverance',
        },
      },
      {
        headerId: 'col-status',
        cellData: {
          value: 'active',
        },
      },
      {
        headerId: 'col-photos-count',
        cellData: {
          value: '194,374',
        },
      },
    ],
  }];

  const headers: TableHeaderProps<string>[] = [
    {
      id: 'col-id',
      title: 'Id',
      isFirstColumn: true,
      width: '50px',
    },
    {
      id: 'col-name',
      title: 'Name',
    },
    {
      id: 'col-status',
      title: 'Status',
    },
    {
      id: 'col-photos-count',
      title: 'Photos',
      isLastColumn: true,
    },
  ];

  return (
    <BespokeTable headers={headers}
                  headerCellRender={(header) => <span>{header.title}</span>}
                  data={data}
                  cellRender={(header, rowProps, cell) => <span>{cell?.value}</span>}
    />
  );
}

export default MyTable;
```

## Props

### headers

An array of object [`TableHeaderProps` (API link)](#TableHeaderProps) defining headers and columns how they should be
rendered.

### headerCellRender

A function that returns a ReactNode to render the header cell.

| Name            | Type                                               | Default | Description |
|-----------------|----------------------------------------------------|---------|-------------|
| `header`\*      | [`TableHeaderProps` (API link)](#TableHeaderProps) |         |             |
| `sortComponent` | `ReactNode`                                        |         |             |

### headerHeight

| Name           | Type                       | Default | Description                    |
|----------------|----------------------------|---------|--------------------------------|
| `headerHeight` | [`Size` (API link)](#Size) | 1fr     | Specify the header cell height |

### data

An array of objects `TableDataProps` representing the data for each row.

### cellRender

A function that returns a ReactNode to render the cell.

| Name       | Type                               | Default | Description |
|------------|------------------------------------|---------|-------------|
| `header`\* | `Header`                           |         |             |
| `rowProps` | [`RowProps` (API link)](#RowProps) |         |             |
| `value`    | `C`                                |         |             |

### loadingComponent _Optional_

An optional ReactNode rendered when the table is loading.

### noDataComponent _Optional_

A optional ReactNode rendered when there is no data.

### isLoading _Optional_

| Name        | Type      | Default | Description |
|-------------|-----------|---------|-------------|
| `isLoading` | `boolean` | false   |             |

### pagination _Optional_

An object defining pagination options.

| Name               | Type       | Default | Description |
|--------------------|------------|---------|-------------|
| `initialPage`      | `number`   |         |             |
| `rowsPerPage`      | `number`   |         |             |
| `itemsPerPage`     | `number[]` |         |             |
| `enablePagination` | `boolean`  |         |             |

### paginationRender _Optional_

A function that returns a ReactNode to render the pagination.

```javascript
(pagination) => <YourPaginationComponent {...pagination} />
```

| Name                        | Type                            | Default | Description |
|-----------------------------|---------------------------------|---------|-------------|
| `currentPage`\*             | `number`                        |         |             |
| `handleChangeRowsPerPage`\* | `(rowsPerPage: number) => void` |         |             |
| `handlePageSelectChange`\*  | `(page: number) => void`        |         |             |
| `dataLength`\*              | `number`                        |         |             |
| `pageCount`\*               | `number`                        |         |             |

### headerSortComponent _Optional_

A ReactNode to render the sort icon in the header.

```javascript
headerSortComponent: (onClick, isSortActive, orderDirection) => ReactNode
```

| Name                   | Type            | Default | Description |
|------------------------|-----------------|---------|-------------|
| `onClick`\*            | `() => void`    |         |             |
| `isColumnSortActive`\* | `boolean`       |         |             |
| `orderDirection`\*     | `asc` or `desc` |         |             |

### fallbackRender _Optional_

A function that returns a ReactNode to render when an error occurs.

```javascript
fallbackRender: (rowId, header, lastRow, cell) => ReactNode
```

| Name        | Type                                           | Default | Description |
|-------------|------------------------------------------------|---------|-------------|
| `rowId`\*   | `string`                                       |         |             |
| `header`\*  | `Header`                                       |         |             |
| `lastRow`\* | `boolean`                                      |         |             |
| `cell`      | [`TableCellProps` (API link)](#TableCellProps) |         |             |

### containerClassName _Optional_
A string to add a css class to the container element.

## API

### TableDataProps

| Name        | Type                                                | Default   | Description                                                        |
|-------------|-----------------------------------------------------|-----------|--------------------------------------------------------------------|
| `rowId`\*   | `string`                                            |           | The id row                                                         |
| `rowHeight` | `Size`                                              | undefined | Define a row height                                                |
| `className` | `string`                                            | undefined | Add a css class to the row element                                 |
| `meta`      | `Record<string, unknown>`                           | undefined | Add any more information you want to use during the cell rendering |
| `cells`\*   | [`TableCellProps<C>[]` (API link)](#TableCellProps) |           | Cells data, C is your value type                                   |

### TableCellProps

Object representing the data for each cell.
The `cellData` can be any type you want, a string, an object, an array etc....

| Name         | Type                        | Default | Description |
|--------------|-----------------------------|---------|-------------|
| `headerId`\* | `string`                    |         |             |
| `cellData`   | `string`, `object`, `array` |         |             |

### Size

String value in `px`, `fr`, `%`, `em`, `rem`, `vh` or `vw`

### Order

`asc` or `desc`

### RowProps

| Name         | Type                      | Default   | Description |
|--------------|---------------------------|-----------|-------------|
| `rowId`\*    | `string`                  |           |             |
| `firstRow`\* | `boolean`                 |           |             |
| `lastRow`\*  | `boolean`                 |           |             |
| `className`  | `string`                  | undefined |             |
| `meta`       | `Record<string, unknown>` | undefined |             |

### TableHeaderProps

| Name                   | Type                         | Default   | Description |
|------------------------|------------------------------|-----------|-------------|
| `id`\*                 | `string`                     |           |             |
| `title`                | `string`                     | undefined |             |
| `propertyKeyToOrder`   | `keyof C`                    | undefined |             |
| `defaultSortDirection` | [`Order` (API link)](#Order) | undefined |             |
| `width`                | `Size`                       | undefined |             |
| `isLastColumn`         | `boolean`                    | undefined |             |
| `isFirstColumn`        | `boolean`                    | undefined |             |

## Customization

Bespoke-Table is designed to be highly customizable. You can use custom components for column headers, cells, sorting
and even pagination. For more information on customization, please refer to the documentation.

## Examples

For more detailed examples on how to integrate and use Bespoke-Table in your projects, please visit
our [storybook](https://s-roueche.github.io/bespoke-table).

## Thanks

- [@MidoAhmed/rollup-react-library-starter](https://github.com/MidoAhmed/rollup-react-library-starter) : Big thanks for
  1this starter kit
- [IconBuddy](https://iconbuddy.app/) : For the icon used in the storybook
- [othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template/) : For the inspiration about
  the README template
- [ChakraUI](https://github.com/chakra-ui/chakra-ui) : For the inspiration about the README and the CONTRIBUTION
  template

## License

[MIT](LICENSE.txt).

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/s-roueche/bespoke-table.svg?style=for-the-badge

[contributors-url]: https://github.com/s-roueche/bespoke-table/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/s-roueche/bespoke-table.svg?style=for-the-badge

[forks-url]: https://github.com/s-roueche/bespoke-table/network/members

[stars-shield]: https://img.shields.io/github/stars/s-roueche/bespoke-table.svg?style=for-the-badge

[stars-url]: https://github.com/s-roueche/bespoke-table/stargazers

[issues-shield]: https://img.shields.io/github/issues/s-roueche/bespoke-table.svg?style=for-the-badge

[issues-url]: https://github.com/s-roueche/bespoke-table/issues

[license-shield]: https://img.shields.io/github/license/s-roueche/bespoke-table.svg?style=for-the-badge

[license-url]: https://github.com/s-roueche/bespoke-table/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/in/sebastien-roueche/

[product-screenshot]: images/examples.gif