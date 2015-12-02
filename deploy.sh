#!/bin/bash

DIST_DIR=dist

PRERELEASE=false webpack -p

rm -rf $DIST_DIR
mkdir -p $DIST_DIR
cp public/* $DIST_DIR
cp build/*.js $DIST_DIR

surge $DIST_DIR -d $SURGE_URL
