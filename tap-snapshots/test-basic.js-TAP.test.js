/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/basic.js TAP deeproot > logical 1`] = `
root@1.2.3 test/fixtures/deeproot/root
├─┬ @scope/x@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/x
│ └─┬ glob@4.0.5 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob
│   ├── graceful-fs@3.0.2 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│   │ ├── sigmund@1.0.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│   │ ├── lru-cache@2.5.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── once@1.3.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/once (deduped)
│   └── once@1.3.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/once
├── @scope/y@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/y
└── foo@1.2.3 test/fixtures/deeproot/root/node_modules/foo
`

exports[`test/basic.js TAP deeproot > physical 1`] = `
root@1.2.3 test/fixtures/deeproot/root
├─┬ @scope/x@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/x
│ └─┬ glob@4.0.5 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob
│   ├── graceful-fs@3.0.2 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│   │ ├── lru-cache@2.5.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── sigmund@1.0.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│   └── once@1.3.0 test/fixtures/deeproot/root/node_modules/@scope/x/node_modules/glob/node_modules/once
├── @scope/y@1.2.3 test/fixtures/deeproot/root/node_modules/@scope/y
└─┬ foo@1.2.3 test/fixtures/deeproot/root/node_modules/foo
  └── abbrev@1.1.1 test/fixtures/deeproot/root/node_modules/foo/node_modules/express
`

exports[`test/basic.js TAP filterWith > logical 1`] = `
root@1.2.3 test/fixtures/root
├── @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x
├── @scope/y@1.2.3 test/fixtures/root/node_modules/@scope/y
└── foo@1.2.3 test/fixtures/root/node_modules/foo
`

exports[`test/basic.js TAP filterWith > physical 1`] = `
root@1.2.3 test/fixtures/root
├── @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x
├── @scope/y@1.2.3 test/fixtures/root/node_modules/@scope/y
└── foo@1.2.3 test/fixtures/root/node_modules/foo
`

exports[`test/basic.js TAP linkedroot > logical 1`] = `
root@1.2.3 test/fixtures/linkedroot
├─┬ @scope/x@1.2.3 test/fixtures/linkedroot/node_modules/@scope/x
│ └─┬ glob@4.0.5 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob
│   ├── graceful-fs@3.0.2 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│   │ ├── sigmund@1.0.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│   │ ├── lru-cache@2.5.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── once@1.3.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/once (deduped)
│   └── once@1.3.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/once
├── @scope/y@1.2.3 test/fixtures/linkedroot/node_modules/@scope/y
└── foo@1.2.3 test/fixtures/linkedroot/node_modules/foo
`

exports[`test/basic.js TAP linkedroot > physical 1`] = `
root@1.2.3 test/fixtures/linkedroot
├─┬ @scope/x@1.2.3 test/fixtures/linkedroot/node_modules/@scope/x
│ └─┬ glob@4.0.5 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob
│   ├── graceful-fs@3.0.2 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│   │ ├── lru-cache@2.5.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── sigmund@1.0.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│   └── once@1.3.0 test/fixtures/linkedroot/node_modules/@scope/x/node_modules/glob/node_modules/once
├── @scope/y@1.2.3 test/fixtures/linkedroot/node_modules/@scope/y
└─┬ foo@1.2.3 test/fixtures/linkedroot/node_modules/foo
  └── abbrev@1.1.1 test/fixtures/linkedroot/node_modules/foo/node_modules/express
`

exports[`test/basic.js TAP looking outside of cwd > logical 1`] = `
root@1.2.3 
├─┬ @scope/x@1.2.3 
│ └─┬ glob@4.0.5 es/glob
│   ├── graceful-fs@3.0.2 es/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 es/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 es/glob/node_modules/minimatch
│   │ ├── sigmund@1.0.0 es/glob/node_modules/minimatch/node_modules/sigmund
│   │ ├── lru-cache@2.5.0 es/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── once@1.3.0 es/glob/node_modules/once (deduped)
│   └── once@1.3.0 es/glob/node_modules/once
├── @scope/y@1.2.3 
└── foo@1.2.3
`

exports[`test/basic.js TAP looking outside of cwd > physical 1`] = `
root@1.2.3 
├─┬ @scope/x@1.2.3 
│ └─┬ glob@4.0.5 es/glob
│   ├── graceful-fs@3.0.2 es/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 es/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 es/glob/node_modules/minimatch
│   │ ├── lru-cache@2.5.0 es/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── sigmund@1.0.0 es/glob/node_modules/minimatch/node_modules/sigmund
│   └── once@1.3.0 es/glob/node_modules/once
├── @scope/y@1.2.3 
└─┬ foo@1.2.3 
  └── abbrev@1.1.1 press
`

exports[`test/basic.js TAP noname > logical 1`] = `
test/fixtures/noname
`

exports[`test/basic.js TAP noname > physical 1`] = `
test/fixtures/noname
└── test/fixtures/noname/node_modules/foo
`

exports[`test/basic.js TAP other > logical 1`] = `
test/fixtures/other
`

exports[`test/basic.js TAP other > physical 1`] = `
test/fixtures/other
└── glob@4.0.5 test/fixtures/other/node_modules/glob (symlink)
`

exports[`test/basic.js TAP root > logical 1`] = `
root@1.2.3 test/fixtures/root
├─┬ @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x
│ └─┬ glob@4.0.5 test/fixtures/root/node_modules/@scope/x/node_modules/glob
│   ├── graceful-fs@3.0.2 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│   │ ├── sigmund@1.0.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│   │ ├── lru-cache@2.5.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── once@1.3.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/once (deduped)
│   └── once@1.3.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/once
├── @scope/y@1.2.3 test/fixtures/root/node_modules/@scope/y
└── foo@1.2.3 test/fixtures/root/node_modules/foo
`

exports[`test/basic.js TAP root > physical 1`] = `
root@1.2.3 test/fixtures/root
├─┬ @scope/x@1.2.3 test/fixtures/root/node_modules/@scope/x
│ └─┬ glob@4.0.5 test/fixtures/root/node_modules/@scope/x/node_modules/glob
│   ├── graceful-fs@3.0.2 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs
│   ├── inherits@2.0.1 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/inherits
│   ├─┬ minimatch@1.0.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch
│   │ ├── lru-cache@2.5.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache
│   │ └── sigmund@1.0.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund
│   └── once@1.3.0 test/fixtures/root/node_modules/@scope/x/node_modules/glob/node_modules/once
├── @scope/y@1.2.3 test/fixtures/root/node_modules/@scope/y
└─┬ foo@1.2.3 test/fixtures/root/node_modules/foo
  └── abbrev@1.1.1 test/fixtures/root/node_modules/foo/node_modules/express
`

exports[`test/basic.js TAP selflink > logical 1`] = `
selflink@1.2.3 test/fixtures/selflink
├─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo
│ ├── selflink@1.2.3 test/fixtures/selflink (symlink)
│ └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
└─┬ @scope/y@1.2.3 test/fixtures/selflink/node_modules/@scope/y
  └─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo (deduped)
    ├── selflink@1.2.3 test/fixtures/selflink (symlink)
    └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
`

exports[`test/basic.js TAP selflink > physical 1`] = `
selflink@1.2.3 test/fixtures/selflink
├── @scope/y@1.2.3 test/fixtures/selflink/node_modules/@scope/y
├─┬ @scope/z@1.2.3 test/fixtures/selflink/node_modules/@scope/z
│ └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob (symlink)
└─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo
  ├── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
  └── selflink@1.2.3 test/fixtures/selflink (symlink)
`

exports[`test/basic.js TAP shake out Link target timing issue > logical 1`] = `
selflink@1.2.3 test/fixtures/selflink
├─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo
│ ├── selflink@1.2.3 test/fixtures/selflink (symlink)
│ └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
└─┬ @scope/y@1.2.3 test/fixtures/selflink/node_modules/@scope/y
  └─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo (deduped)
    ├── selflink@1.2.3 test/fixtures/selflink (symlink)
    └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
`

exports[`test/basic.js TAP shake out Link target timing issue > physical 1`] = `
selflink@1.2.3 test/fixtures/selflink
├── @scope/y@1.2.3 test/fixtures/selflink/node_modules/@scope/y
├─┬ @scope/z@1.2.3 test/fixtures/selflink/node_modules/@scope/z
│ └── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob (symlink)
└─┬ foo@1.2.3 test/fixtures/selflink/node_modules/foo
  ├── glob@4.0.5 test/fixtures/selflink/node_modules/foo/node_modules/glob
  └── selflink@1.2.3 test/fixtures/selflink (symlink)
`

exports[`test/basic.js TAP walking through trees logical sprint > logical walk log 1`] = `
[
  [ 'ENTER', '' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '/node_modules/glob' ],
  [ 'ENTER', '/node_modules/glob/node_modules/graceful-fs' ],
  [ 'EXIT', '/node_modules/glob/node_modules/graceful-fs' ],
  [ 'ENTER', '/node_modules/glob/node_modules/inherits' ],
  [ 'EXIT', '/node_modules/glob/node_modules/inherits' ],
  [ 'ENTER', '/node_modules/glob/node_modules/minimatch' ],
  [
    'ENTER',
    '/node_modules/glob/node_modules/minimatch/node_modules/sigmund'
  ],
  [
    'EXIT',
    '/node_modules/glob/node_modules/minimatch/node_modules/sigmund'
  ],
  [
    'ENTER',
    '/node_modules/glob/node_modules/minimatch/node_modules/lru-cache'
  ],
  [
    'EXIT',
    '/node_modules/glob/node_modules/minimatch/node_modules/lru-cache'
  ],
  [ 'ENTER', '/node_modules/glob/node_modules/once' ],
  [ 'EXIT', '/node_modules/glob/node_modules/once' ],
  [ 'EXIT', '/node_modules/glob/node_modules/minimatch' ],
  [ 'EXIT', '/node_modules/glob' ],
  [ 'EXIT', '' ],
  [ 'ENTER', '' ],
  [ 'EXIT', '' ],
  [ 'ENTER', '' ],
  [ 'EXIT', '' ],
  [ 'EXIT', '' ]
]
`

exports[`test/basic.js TAP walking through trees logical sprint > logical walk result 1`] = `
[
  'root',
  [
    [
      '@scope/x',
      [
        [
          'glob',
          [
            [ 'graceful-fs', [] ],
            [ 'inherits', [] ],
            [
              'minimatch',
              [
                [ 'sigmund', [] ],
                [ 'lru-cache', [] ],
                [ 'once', [] ]
              ]
            ],
            [ 'once', [] ]
          ]
        ]
      ]
    ],
    [ '@scope/y', [] ],
    [ 'foo', [] ]
  ]
]
`

exports[`test/basic.js TAP walking through trees logical stroll > logical walk log 1`] = `
[
  [ 'ENTER', '' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '/node_modules/glob' ],
  [ 'EXIT', '' ],
  [ 'EXIT', '' ],
  [ 'ENTER', '/node_modules/glob/node_modules/graceful-fs' ],
  [ 'ENTER', '/node_modules/glob/node_modules/inherits' ],
  [ 'ENTER', '/node_modules/glob/node_modules/minimatch' ],
  [ 'ENTER', '/node_modules/glob/node_modules/once' ],
  [ 'EXIT', '/node_modules/glob/node_modules/graceful-fs' ],
  [ 'EXIT', '/node_modules/glob/node_modules/inherits' ],
  [
    'ENTER',
    '/node_modules/glob/node_modules/minimatch/node_modules/sigmund'
  ],
  [
    'ENTER',
    '/node_modules/glob/node_modules/minimatch/node_modules/lru-cache'
  ],
  [ 'EXIT', '/node_modules/glob/node_modules/once' ],
  [
    'EXIT',
    '/node_modules/glob/node_modules/minimatch/node_modules/sigmund'
  ],
  [
    'EXIT',
    '/node_modules/glob/node_modules/minimatch/node_modules/lru-cache'
  ],
  [ 'EXIT', '/node_modules/glob/node_modules/minimatch' ],
  [ 'EXIT', '/node_modules/glob' ],
  [ 'EXIT', '' ],
  [ 'EXIT', '' ]
]
`

exports[`test/basic.js TAP walking through trees logical stroll > logical walk result 1`] = `
[
  'root',
  [
    [
      '@scope/x',
      [
        [
          'glob',
          [
            [ 'graceful-fs', [] ],
            [ 'inherits', [] ],
            [
              'minimatch',
              [
                [ 'sigmund', [] ],
                [ 'lru-cache', [] ],
                [ 'once', [] ]
              ]
            ],
            [ 'once', [] ]
          ]
        ]
      ]
    ],
    [ '@scope/y', [] ],
    [ 'foo', [] ]
  ]
]
`

exports[`test/basic.js TAP walking through trees no entry > no entry walk log 1`] = `
[
  [ 'EXIT', '/node_modules/glob/node_modules/graceful-fs' ],
  [ 'EXIT', '/node_modules/glob/node_modules/inherits' ],
  [
    'EXIT',
    '/node_modules/glob/node_modules/minimatch/node_modules/lru-cache'
  ],
  [
    'EXIT',
    '/node_modules/glob/node_modules/minimatch/node_modules/sigmund'
  ],
  [ 'EXIT', '/node_modules/glob/node_modules/minimatch' ],
  [ 'EXIT', '/node_modules/glob/node_modules/once' ],
  [ 'EXIT', '/node_modules/glob' ],
  [ 'EXIT', '' ],
  [ 'EXIT', '' ],
  [ 'EXIT', '_modules/express' ],
  [ 'EXIT', '' ],
  [ 'EXIT', '' ]
]
`

exports[`test/basic.js TAP walking through trees no exit > no exit walk log 1`] = `
[
  [ 'ENTER', '' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '/node_modules/glob' ],
  [ 'ENTER', '/node_modules/glob/node_modules/graceful-fs' ],
  [ 'ENTER', '/node_modules/glob/node_modules/inherits' ],
  [ 'ENTER', '/node_modules/glob/node_modules/minimatch' ],
  [
    'ENTER',
    '/node_modules/glob/node_modules/minimatch/node_modules/lru-cache'
  ],
  [
    'ENTER',
    '/node_modules/glob/node_modules/minimatch/node_modules/sigmund'
  ],
  [ 'ENTER', '/node_modules/glob/node_modules/once' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '_modules/express' ]
]
`

exports[`test/basic.js TAP walking through trees physical sprint > physical walk log 1`] = `
[
  [ 'ENTER', '' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '/node_modules/glob' ],
  [ 'ENTER', '/node_modules/glob/node_modules/graceful-fs' ],
  [ 'EXIT', '/node_modules/glob/node_modules/graceful-fs' ],
  [ 'ENTER', '/node_modules/glob/node_modules/inherits' ],
  [ 'EXIT', '/node_modules/glob/node_modules/inherits' ],
  [ 'ENTER', '/node_modules/glob/node_modules/minimatch' ],
  [
    'ENTER',
    '/node_modules/glob/node_modules/minimatch/node_modules/lru-cache'
  ],
  [
    'EXIT',
    '/node_modules/glob/node_modules/minimatch/node_modules/lru-cache'
  ],
  [
    'ENTER',
    '/node_modules/glob/node_modules/minimatch/node_modules/sigmund'
  ],
  [
    'EXIT',
    '/node_modules/glob/node_modules/minimatch/node_modules/sigmund'
  ],
  [ 'EXIT', '/node_modules/glob/node_modules/minimatch' ],
  [ 'ENTER', '/node_modules/glob/node_modules/once' ],
  [ 'EXIT', '/node_modules/glob/node_modules/once' ],
  [ 'EXIT', '/node_modules/glob' ],
  [ 'EXIT', '' ],
  [ 'ENTER', '' ],
  [ 'EXIT', '' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '_modules/express' ],
  [ 'EXIT', '_modules/express' ],
  [ 'EXIT', '' ],
  [ 'EXIT', '' ]
]
`

exports[`test/basic.js TAP walking through trees physical sprint > physical walk result 1`] = `
[
  'root',
  [
    [
      '@scope/x',
      [
        [
          'glob',
          [
            [ 'graceful-fs', [] ],
            [ 'inherits', [] ],
            [ 'minimatch', [ [ 'lru-cache', [] ], [ 'sigmund', [] ] ] ],
            [ 'once', [] ]
          ]
        ]
      ]
    ],
    [ '@scope/y', [] ],
    [ 'foo', [ [ 'express', [] ] ] ]
  ]
]
`

exports[`test/basic.js TAP walking through trees physical stroll > physical walk log 1`] = `
[
  [ 'ENTER', '' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '' ],
  [ 'ENTER', '/node_modules/glob' ],
  [ 'EXIT', '' ],
  [ 'ENTER', '_modules/express' ],
  [ 'ENTER', '/node_modules/glob/node_modules/graceful-fs' ],
  [ 'ENTER', '/node_modules/glob/node_modules/inherits' ],
  [ 'ENTER', '/node_modules/glob/node_modules/minimatch' ],
  [ 'ENTER', '/node_modules/glob/node_modules/once' ],
  [ 'EXIT', '_modules/express' ],
  [ 'EXIT', '/node_modules/glob/node_modules/graceful-fs' ],
  [ 'EXIT', '/node_modules/glob/node_modules/inherits' ],
  [
    'ENTER',
    '/node_modules/glob/node_modules/minimatch/node_modules/lru-cache'
  ],
  [
    'ENTER',
    '/node_modules/glob/node_modules/minimatch/node_modules/sigmund'
  ],
  [ 'EXIT', '/node_modules/glob/node_modules/once' ],
  [
    'EXIT',
    '/node_modules/glob/node_modules/minimatch/node_modules/lru-cache'
  ],
  [
    'EXIT',
    '/node_modules/glob/node_modules/minimatch/node_modules/sigmund'
  ],
  [ 'EXIT', '' ],
  [ 'EXIT', '/node_modules/glob/node_modules/minimatch' ],
  [ 'EXIT', '/node_modules/glob' ],
  [ 'EXIT', '' ],
  [ 'EXIT', '' ]
]
`

exports[`test/basic.js TAP walking through trees physical stroll > physical walk result 1`] = `
[
  'root',
  [
    [
      '@scope/x',
      [
        [
          'glob',
          [
            [ 'graceful-fs', [] ],
            [ 'inherits', [] ],
            [ 'minimatch', [ [ 'lru-cache', [] ], [ 'sigmund', [] ] ] ],
            [ 'once', [] ]
          ]
        ]
      ]
    ],
    [ '@scope/y', [] ],
    [ 'foo', [ [ 'express', [] ] ] ]
  ]
]
`