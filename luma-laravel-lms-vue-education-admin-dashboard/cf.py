#!/usr/bin/env python
import boto3
import datetime

# Credentials in ~/.aws/credentials
if __name__ == '__main__':
    session = boto3.Session(profile_name='frontendmatter_demos')
    client = session.client('cloudfront')
    client.create_invalidation(
        DistributionId='E3MHHQHYV1LNMC',
        InvalidationBatch={
            'Paths': {
                'Quantity': 1,
                'Items': ['/*']
            },
            'CallerReference': str(datetime.datetime.now())
        }
    )