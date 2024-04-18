window.pxstyles = {
    groups: [
        {
            name: 'undefined',
            description: '',
            variables: [],
            items: [
                {
                    namespace: 'other',
                    group: 'undefined',
                    name: 'table-grid',
                    docName: 'table-grid()',
                    type: 'mixin',
                    description:
                        'Create a CSS grid that mimics a table where columns are specified and rows are added as needed.\n',
                    example: [
                        {
                            type: 'include',
                            code: 'display: grid;\ngrid-template-columns: 4;\ngrid-template-rows: auto;\ngrid-auto-rows: auto;\ngrid-gap: 10px;',
                            description: 'table-grid(4, auto, 10px); // =>',
                        },
                    ],
                    parameter: [
                        {
                            type: 'column definitions',
                            name: 'columns',
                            description: 'Column definitions',
                        },
                        {
                            type: 'row definition',
                            name: 'row-height',
                            default: 'auto',
                            description: 'The height of each row',
                        },
                        {
                            type: 'number',
                            name: 'gap',
                            default: '8px',
                            description: 'The gap between items\n',
                        },
                    ],
                    access: 'public',
                    path: 'scratch.scss',
                },
            ],
        },
    ],
};
