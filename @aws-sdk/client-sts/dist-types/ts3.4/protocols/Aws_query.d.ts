import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
import {
  AssumeRoleCommandInput,
  AssumeRoleCommandOutput,
} from "../commands/AssumeRoleCommand";
import {
  AssumeRoleWithSAMLCommandInput,
  AssumeRoleWithSAMLCommandOutput,
} from "../commands/AssumeRoleWithSAMLCommand";
import {
  AssumeRoleWithWebIdentityCommandInput,
  AssumeRoleWithWebIdentityCommandOutput,
} from "../commands/AssumeRoleWithWebIdentityCommand";
import {
  DecodeAuthorizationMessageCommandInput,
  DecodeAuthorizationMessageCommandOutput,
} from "../commands/DecodeAuthorizationMessageCommand";
import {
  GetAccessKeyInfoCommandInput,
  GetAccessKeyInfoCommandOutput,
} from "../commands/GetAccessKeyInfoCommand";
import {
  GetCallerIdentityCommandInput,
  GetCallerIdentityCommandOutput,
} from "../commands/GetCallerIdentityCommand";
import {
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
} from "../commands/GetFederationTokenCommand";
import {
  GetSessionTokenCommandInput,
  GetSessionTokenCommandOutput,
} from "../commands/GetSessionTokenCommand";
export declare const serializeAws_queryAssumeRoleCommand: (
  input: AssumeRoleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryAssumeRoleWithSAMLCommand: (
  input: AssumeRoleWithSAMLCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryAssumeRoleWithWebIdentityCommand: (
  input: AssumeRoleWithWebIdentityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDecodeAuthorizationMessageCommand: (
  input: DecodeAuthorizationMessageCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryGetAccessKeyInfoCommand: (
  input: GetAccessKeyInfoCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryGetCallerIdentityCommand: (
  input: GetCallerIdentityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryGetFederationTokenCommand: (
  input: GetFederationTokenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryGetSessionTokenCommand: (
  input: GetSessionTokenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_queryAssumeRoleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssumeRoleCommandOutput>;
export declare const deserializeAws_queryAssumeRoleWithSAMLCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssumeRoleWithSAMLCommandOutput>;
export declare const deserializeAws_queryAssumeRoleWithWebIdentityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssumeRoleWithWebIdentityCommandOutput>;
export declare const deserializeAws_queryDecodeAuthorizationMessageCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DecodeAuthorizationMessageCommandOutput>;
export declare const deserializeAws_queryGetAccessKeyInfoCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAccessKeyInfoCommandOutput>;
export declare const deserializeAws_queryGetCallerIdentityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetCallerIdentityCommandOutput>;
export declare const deserializeAws_queryGetFederationTokenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetFederationTokenCommandOutput>;
export declare const deserializeAws_queryGetSessionTokenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetSessionTokenCommandOutput>;