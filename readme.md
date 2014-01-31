# smartdc-listcomputenodes
List your joyent machines by the compute node they are running on.  Ensure your workload is distributed!

## Install
`npm install smartdc-listcomputenodes -g`

## Use 
`sdc-listcomputenodes`

The only option is `--format`, which can be `json` or `human`

## Example

`sdc-listcomputenodes --format human`

```bash
> sdc-listcomputenodes --format human
Compute Nodes:

xxx-xxx-xxx (2)
- my-server-1 @ 123.123.123.123,192.168.10.11
- my-server-2 @ 123.123.123.123,192.168.10.11
yyy-yyy-yyy (1)
 - my-server-3 @ 123.123.123.123,192.168.10.11

```

## Notes

Currently, the binary package(s) assume you will be running the commands from bash, and have the following environment variables set for the normal smartdc API:

 - `SDC_URL` url for the Joyent API (something like `https://us-sw-1.api.joyentcloud.com/`)
 - `SDC_ACCOUNT` your joyent account name
 - `SDC_KEY_ID` the fingerprint of your SSH key

If you are upgrading from `smartdc` v6x, note the name change for the required ENV variables, and click visit https://npmjs.org/package/smartdc to learn how to generate your ssh fingerprint
